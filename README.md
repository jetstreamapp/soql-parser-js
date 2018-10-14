# SOQL Parser JS

## Description
SOQL Parser JS will parse a SOQL query string into an object that is easy to work with and has the query broken down into usable parts.

This works in the browser as long as npm is used to install the package with dependencies and the browser supports ES6 or a transpiler is used.

*Warning*: antlr4 is a very large library and is required for the parser to function, so be aware of this prior to including in your browser bundles.

## Examples
For an example of the parser, check out the [example application](https://paustint.github.io/soql-parser-js/).

## Usage

### Available functions
1. `parseQuery(soqlQueryString, options)`
2. `composeQuery(SoqlQuery, options)`

### Parse
The parser takes a SOQL query and returns structured data.
#### Typescript / ES6
```typescript
import { parseQuery } from 'soql-parser-js';

const soql = 'SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId';

const soqlQuery = parseQuery(soql);

console.log(JSON.stringify(soqlQuery, null, 2));

```

#### Node
```javascript
var soqlParserJs = require('soql-parser-js');

const soql = 'SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId';

const soqlQuery = soqlParserJs.parseQuery(soql);

console.log(JSON.stringify(soqlQuery, null, 2));
```

This yields an object with the following structure:

```json
{
  "fields": [
    {
      "text": "UserId"
    },
    {
      "fn": {
        "text": "COUNT(Id)",
        "name": "COUNT",
        "parameter": "Id"
      }
    }
  ],
  "subqueries": [],
  "sObject": "LoginHistory",
  "whereClause": {
    "left": {
      "field": "LoginTime",
      "operator": ">",
      "value": "2010-09-20T22:16:30.000Z"
    },
    "operator": "AND",
    "right": {
      "left": {
        "field": "LoginTime",
        "operator": "<",
        "value": "2010-09-21T22:16:30.000Z"
      }
    }
  },
  "groupBy": {
    "field": "UserId"
  }
}
```
### compose
Composing a query turns a parsed query back into a SOQL query. For some operators, they may be converted to upper case (e.x. NOT, AND)

#### Typescript / ES6
```typescript
import { composeQuery } from 'soql-parser-js';

const soqlQuery = {
  fields: [
    {
      text: 'UserId',
    },
    {
      fn: {
        text: 'COUNT(Id)',
        name: 'COUNT',
        parameter: 'Id',
      },
    },
  ],
  subqueries: [],
  sObject: 'LoginHistory',
  whereClause: {
    left: {
      field: 'LoginTime',
      operator: '>',
      value: '2010-09-20T22:16:30.000Z',
    },
    operator: 'AND',
    right: {
      left: {
        field: 'LoginTime',
        operator: '<',
        value: '2010-09-21T22:16:30.000Z',
      },
    },
  },
  groupBy: {
    field: 'UserId',
  },
};

const query = composeQuery(soqlQuery);

console.log(query);

```

This yields an object with the following structure:

```sql
SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId
```

### Options

```typescript
export interface SoqlQueryConfig {
  continueIfErrors?: boolean; // default=false
  logging: boolean; // default=false
  includeSubqueryAsField: boolean; // default=true
}

export interface SoqlComposeConfig {
  logging: boolean; // default=false
}
```

### Data Models
```typescript
export type LogicalOperator = 'AND' | 'OR';
export type Operator = '=' | '<=' | '>=' | '>' | '<' | 'LIKE' | 'IN' | 'NOT IN' | 'INCLUDES' | 'EXCLUDES';

export interface Query {
  fields: Field[];
  subqueries: Query[];
  sObject: string;
  sObjectAlias?: string;
  whereClause?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: HavingClause;
  orderBy?: OrderByClause | OrderByClause[];
}

export interface SelectStatement {
  fields: Field[];
}

export interface Field {
  text?: string;
  alias?: string;
  relationshipFields?: string[];
  fn?: FunctionExp;
  subqueryObjName?: string;
}

export interface WhereClause {
  left: Condition | WhereClause;
  right?: Condition | WhereClause;
  operator?: LogicalOperator;
}

export interface Condition {
  openParen?: boolean;
  closeParen?: boolean;
  logicalPrefix?: 'NOT';
  field: string;
  operator: Operator;
  value: string | string[];
}

export interface OrderByClause {
  field?: string;
  fn?: FunctionExp;
  order?: 'ASC' | 'DESC';
  nulls?: 'FIRST' | 'LAST';
}

export interface GroupByClause {
  field: string | string[];
  type?: 'CUBE' | 'ROLLUP';
}

export interface HavingClause {
  left: HavingCondition | HavingClause;
  right?: HavingCondition | HavingClause;
  operator?: LogicalOperator;
}

export interface HavingCondition {
  field?: string;
  fn?: FunctionExp;
  operator: string;
  value: string | number;
}

export interface FunctionExp {
  text?: string;
  name?: string;
  alias?: string;
  parameter?: string | string[];
}
```

## Contributing
All contributions are welcome on the project. Please read the [contribution guidelines](https://github.com/paustint/soql-parser-js/blob/master/CONTRIBUTING.md).

## Special Thanks
* This library is based on the ANTLR4 grammar file [produced by Mulesoft](https://github.com/mulesoft/salesforce-soql-parser/blob/antlr4/SOQL.g4).
* The following repository also was a help to get things started: https://github.com/petermetz/antlr-4-ts-test
