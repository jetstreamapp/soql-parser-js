# SOQL Parser JS
## Status
* This project is a work in progress and is considered an alpha
* The goal of this project is to produce an npm module that will allow import into node projects (and ideally into the browser as well, but this is lower priority because of the size of the code required)

## Description
SOQL Parser JS will parse a SOQL query string into an object that is easy to work with and has the query broken down into usable parts.

## TODO
- [ ] Assess all property/function/variable names and make any adjustments
- [x] Analyze more SOQL parsing examples to ensure that output is appropriate
- [ ] Include information on how to contribute
- [ ] Keep examples up-to-date as the package is finalized
- [ ] Figure out proper build/packaging for npm
  - [ ] Consider Webpack for build
- [ ] Figure out how/if we can create a bundle that is browser compatible and include examples
  - [ ] Provide instructions for using with node, in the browser, using TS and JS
- [ ] Create typescript typings for the bundled JS
- [ ] Provide a GitHub pages example application
## Future Idea List - phase 2+
- [ ] Provide a CLI interface
- [ ] Provide ability to turn parsed SOQL back to SOQL


## Examples
(This is still a work in progress and will change once the npm bundle structure is figured out)

These examples only work when working with the codebase directly for now until we have an npm module published.
This assumes you are working directly in the app folder.

See `./src/tests/TestCases.ts` for example queries and their generated output.

You can also run any example withing the examples folder to observe the output.

```typescript
import { parseQuery } from './SoqlParser';

const soql = 'SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId';

const soqlQuery = parseQuery(soql);

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

## Special Thanks
* This library is based on the ANTLR4 grammar file produced by Mulesoft here https://github.com/mulesoft/salesforce-soql-parser/blob/antlr4/SOQL.g4.
* The following repository also was a help to get things started: https://github.com/petermetz/antlr-4-ts-test
