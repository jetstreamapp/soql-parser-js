---
sidebar_position: 4
---

# Other Examples

### Parsing Queries

Parsing a SOQL query can be completed by calling `parseQuery(soqlQueryString)`. A `Query` data structure will be returned.

```typescript
import { parseQuery } from 'soql-parser-js';

const soql = `
  SELECT UserId, COUNT(Id)
  FROM LoginHistory
  WHERE LoginTime > 2010-09-20T22:16:30.000Z
  AND LoginTime < 2010-09-21T22:16:30.000Z
  GROUP BY UserId
`;

console.log(JSON.stringify(soqlQuery, null, 2));
```

<details>
  <summary><b>Results (click to show)</b></summary>

```json
{
  "fields": [
    {
      "type": "Field",
      "field": "UserId"
    },
    {
      "type": "FieldFunctionExpression",
      "functionName": "COUNT",
      "parameters": ["Id"],
      "isAggregateFn": true,
      "rawValue": "COUNT(Id)"
    }
  ],
  "sObject": "LoginHistory",
  "where": {
    "left": {
      "field": "LoginTime",
      "operator": ">",
      "value": "2010-09-20T22:16:30.000Z",
      "literalType": "DATETIME"
    },
    "operator": "AND",
    "right": {
      "left": {
        "field": "LoginTime",
        "operator": "<",
        "value": "2010-09-21T22:16:30.000Z",
        "literalType": "DATETIME"
      }
    }
  },
  "groupBy": {
    "field": "UserId"
  }
}
```

</details>

### Parsing a partial query

Added support for `allowPartialQuery` in version `4.4.0`

```typescript
import { parseQuery } from 'soql-parser-js';

const soql = `
  WHERE LoginTime > 2010-09-20T22:16:30.000Z
  AND LoginTime < 2010-09-21T22:16:30.000Z
  GROUP BY UserId
`;

const soqlQuery = parseQuery(soql, { allowPartialQuery: true });

console.log(JSON.stringify(soqlQuery, null, 2));
```

<details>
  <summary><b>Results (click to show)</b></summary>

```json
{
  "where": {
    "left": {
      "field": "LoginTime",
      "operator": ">",
      "value": "2010-09-20T22:16:30.000Z",
      "literalType": "DATETIME"
    },
    "operator": "AND",
    "right": {
      "left": {
        "field": "LoginTime",
        "operator": "<",
        "value": "2010-09-21T22:16:30.000Z",
        "literalType": "DATETIME"
      }
    }
  },
  "groupBy": {
    "field": "UserId"
  }
}
```

</details>

### Validating Queries

```typescript
import { isQueryValid } from 'soql-parser-js';

const invalidSoql = `SELECT UserId, COUNT(Id) Account`;
const validSoql = `SELECT UserId, COUNT(Id) Account`;

console.log(isQueryValid(soql));
console.log(isQueryValid(soql));
```

### Composing Queries

Build a `Query` data structure to have it converted back into a SOQL query.

Composing a query will turn a Query object back to a SOQL query string. The exact same data structure returned from `parseQuery()` can be used,
but depending on your use-case, you may need to build your own data structure to compose a query.
These examples show building your own Query object with the minimum required fields.

Some utility methods have been provided to make it easier to build the field data structures.

**Note:** Some operators may be converted to uppercase (e.x. NOT, AND)

**Note:** There are a number of fields populated on the Query object when `parseQuery()` is called that are not required to compose a query. Look at the examples below and the comments in the data model for more information.

```typescript
import { composeQuery, getField, Query } from 'soql-parser-js';

// Build a subquery
const oppLineItemsSubquery = {
  fields: [
    getField('Quantity'),
    getField('ListPrice'),
    getField({
      field: 'UnitPrice',
      relationships: ['PricebookEntry'],
    }),
    getField({
      field: 'Name',
      relationships: ['PricebookEntry'],
    }),
  ],
  relationshipName: 'OpportunityLineItems',
};

// build the main query and add the subquery as a field
const soqlQuery: Query = {
  fields: [
    getField('Id'),
    getField('Name'),
    getField({
      functionName: 'FORMAT',
      parameters: 'Amount',
      alias: 'MyFormattedAmount',
    }),
    getField({ subquery: oppLineItemsSubquery }),
  ],
  sObject: 'Opportunity',
  where: {
    left: {
      field: 'CreatedDate',
      operator: '>',
      value: 'LAST_N_YEARS:1',
    },
    operator: 'AND',
    right: {
      left: {
        field: 'StageName',
        operator: '=',
        value: 'Closed Won',
        // literalType is optional, but if set to STRING and our value is not already wrapped in "'", they will be added
        // All other literalType values are ignored when composing a query
        literalType: 'STRING',
      },
    },
  },
  limit: 150,
};

const composedQuery = composeQuery(soqlQuery, { format: true });

console.log(composedQuery);
```

**Results**

```sql
SELECT Id, Name, FORMAT(Amount) MyFormattedAmount,
  (
    SELECT Quantity, ListPrice, PricebookEntry.UnitPrice,
      PricebookEntry.Name
    FROM OpportunityLineItems
  )
FROM Opportunity
WHERE CreatedDate > LAST_N_YEARS:1
AND StageName = 'Closed Won'
LIMIT 150
```

### Composing a partial query

Starting in version `4.4`, compose will not fail if there are missing `SELECT` and `FROM` clauses in your query.

Partial compose support it supported without any additional steps.

```typescript
import { Compose, parseQuery } from 'soql-parser-js';

const soql = `WHERE Name LIKE 'A%' AND MailingCity = 'California`;
const parsedQuery = parseQuery(soql, { allowPartialQuery: true });

// Results of Parsed Query:
/**
{
  where: {
    left: { field: 'Name', operator: 'LIKE', value: "'A%'", literalType: 'STRING' },
    operator: 'AND',
    right: { left: { field: 'MailingCity', operator: '=', value: "'California'", literalType: 'STRING' } },
  },
}
*/

const composedQuery = composeQuery(soqlQuery, { format: true });

console.log(composedQuery);
```

**Results**

```sql
WHERE Name LIKE 'A%' AND MailingCity = 'California
```

<details>
  <summary><b>See the alternate way to compose partial queries by calling the Compose class directly</b></summary>

If you need to compose just a part of a query instead of the entire query, you can create an instance of the Compose class directly.

For example, if you just need the `WHERE` clause from a query as a string, you can do the following:

```typescript
import { Compose, parseQuery } from 'soql-parser-js';

const soql = `SELECT Id FROM Account WHERE Name = 'Foo'`;
const parsedQuery = parseQuery(soql);

// Results of Parsed Query:
  // const parsedQuery = {
  //   fields: [
  //     {
  //       type: 'Field',
  //       field: 'Id',
  //     },
  //   ],
  //   sObject: 'Account',
  //   where: {
  //     left: {
  //       field: 'Name',
  //       operator: '=',
  //       value: "'Foo'",
  //       literalType: 'STRING',
  //     },
  //   },
  // };

  // Create a new instance of the compose class and set the autoCompose to false to avoid composing the entire query
  const composer = new Compose(parsedQuery, { autoCompose: false });


  const whereClause = composer.parseWhereOrHavingClause(parsedQuery.where);

  console.log(whereClause);
}
```

#### Available methods on the `Compose` class

These are used internally, but are public and available for use.

```typescript
parseQuery(query: Query | Subquery): string;
parseFields(fields: FieldType[]): { text: string; typeOfClause?: string[] }[];
parseTypeOfField(typeOfField: FieldTypeOf): string[];
parseWhereOrHavingClause(whereOrHaving: WhereClause | HavingClause, tabOffset = 0, priorConditionIsNegation = false): string;
parseGroupByClause(groupBy: GroupByClause | GroupByClause[]): string;
parseOrderBy(orderBy: OrderByClause | OrderByClause[]): string;
parseWithDataCategory(withDataCategory: WithDataCategoryClause): string;
```

</details>

## Format Query

This function is provided as a convenience and just calls parse and compose.
[Check out the demo](https://paustint.github.io/soql-parser-js/) to see the outcome of the various format options.

```typescript
import { formatQuery } from 'soql-parser-js';

const query = `SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate, CreatedById, Type FROM Opportunities), (SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, Website FROM ChildAccounts) FROM Account WHERE Name LIKE 'a%' OR Name LIKE 'b%' OR Name LIKE 'c%'`;

const formattedQuery1 = formatQuery(query);
const formattedQuery2 = formatQuery(query, {
  fieldMaxLineLength: 20,
  fieldSubqueryParensOnOwnLine: false,
  whereClauseOperatorsIndented: true,
});
const formattedQuery3 = formatQuery(query, { fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: true });
```

```sql
-- formattedQuery1
SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,
	BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy,
	ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type,
	Website,
	(
		SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate,
			CreatedById, Type
		FROM Opportunities
	),
	(
		SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,
			BillingAddress, Website
		FROM ChildAccounts
	)
FROM Account
WHERE Name LIKE 'a%'
OR Name LIKE 'b%'
OR Name LIKE 'c%'

-- formattedQuery2
SELECT Id, Name,
	AccountNumber, AccountSource,
	AnnualRevenue, BillingAddress,
	BillingCity, BillingCountry,
	BillingGeocodeAccuracy, ShippingStreet,
	Sic, SicDesc, Site,
	SystemModstamp, TickerSymbol, Type,
	Website,
	(SELECT Id, Name,
		AccountId, Amount, CampaignId,
		CloseDate, CreatedById, Type
	FROM Opportunities),
	(SELECT Id, Name,
		AccountNumber, AccountSource,
		AnnualRevenue, BillingAddress,
		Website
	FROM ChildAccounts)
FROM Account
WHERE Name LIKE 'a%'
	OR Name LIKE 'b%'
	OR Name LIKE 'c%'


-- formattedQuery3
SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,
	BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy,
	ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type,
	Website,
	(
		SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate,
			CreatedById, Type
		FROM Opportunities
	),
	(
		SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,
			BillingAddress, Website
		FROM ChildAccounts
	)
FROM Account
WHERE Name LIKE 'a%'
	OR Name LIKE 'b%'
	OR Name LIKE 'c%'
```
