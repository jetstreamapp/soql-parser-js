# SOQL Parser JS

## Description
SOQL Parser JS will parse a SOQL query string into an object that is easy to work with and has the query broken down into usable parts.

## TODO
- [ ] Assess all property/function/variable names and make any adjustments as needed
- [x] Analyze more SOQL parsing examples to ensure that output is appropriate
- [ ] Include information on how to contribute
- [x] Keep examples up-to-date as the package is finalized
- [x] Figure out proper build/packaging for npm
  - [x] ~~Consider Webpack for build~~
- [x] Figure out how/if we can create a bundle that is browser compatible and include examples
  - [ ] Provide instructions for using with node, in the browser, using TS and JS
  - [ ] Figure out other builds (UMD - minified)
- [x] Create typescript typings for the bundled JS
- [x] Provide a GitHub pages example application
## Future Idea List
- [ ] Provide a CLI interface
- [ ] Provide ability to turn parsed SOQL back to SOQL

## Examples
For an example of the parser, check out the [example application](https://paustint.github.io/soql-parser-js/).

### Typescript / ES6
```typescript
import { parseQuery } from './SoqlParser';

const soql = 'SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId';

const soqlQuery = parseQuery(soql);

console.log(JSON.stringify(soqlQuery, null, 2));

```

### Node
```javascript
var soqlParserJs = require("soql-parser-js");

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

### Data Model of Parsed Data
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
