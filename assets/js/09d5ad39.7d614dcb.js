"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30],{8058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(5893),s=r(1151);const o={sidebar_position:4},i="Other Examples",a={id:"examples",title:"Other Examples",description:"Parsing Queries",source:"@site/docs/examples.md",sourceDirName:".",slug:"/examples",permalink:"/soql-parser-js/docs/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/jetstreamapp/soql-parser-js/docs/docs/docs/examples.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/soql-parser-js/docs/cli"}},l={},c=[{value:"Parsing Queries",id:"parsing-queries",level:3},{value:"Parsing a partial query",id:"parsing-a-partial-query",level:3},{value:"Validating Queries",id:"validating-queries",level:3},{value:"Composing Queries",id:"composing-queries",level:3},{value:"Composing a partial query",id:"composing-a-partial-query",level:3},{value:"Available methods on the <code>Compose</code> class",id:"available-methods-on-the-compose-class",level:4},{value:"Format Query",id:"format-query",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"other-examples",children:"Other Examples"}),"\n",(0,t.jsx)(n.h3,{id:"parsing-queries",children:"Parsing Queries"}),"\n",(0,t.jsxs)(n.p,{children:["Parsing a SOQL query can be completed by calling ",(0,t.jsx)(n.code,{children:"parseQuery(soqlQueryString)"}),". A ",(0,t.jsx)(n.code,{children:"Query"})," data structure will be returned."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { parseQuery } from '@jetstreamapp/soql-parser-js';\n\nconst soql = `\n  SELECT UserId, COUNT(Id)\n  FROM LoginHistory\n  WHERE LoginTime > 2010-09-20T22:16:30.000Z\n  AND LoginTime < 2010-09-21T22:16:30.000Z\n  GROUP BY UserId\n`;\n\nconsole.log(JSON.stringify(soqlQuery, null, 2));\n"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Results (click to show)"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "fields": [\n    {\n      "type": "Field",\n      "field": "UserId"\n    },\n    {\n      "type": "FieldFunctionExpression",\n      "functionName": "COUNT",\n      "parameters": ["Id"],\n      "isAggregateFn": true,\n      "rawValue": "COUNT(Id)"\n    }\n  ],\n  "sObject": "LoginHistory",\n  "where": {\n    "left": {\n      "field": "LoginTime",\n      "operator": ">",\n      "value": "2010-09-20T22:16:30.000Z",\n      "literalType": "DATETIME"\n    },\n    "operator": "AND",\n    "right": {\n      "left": {\n        "field": "LoginTime",\n        "operator": "<",\n        "value": "2010-09-21T22:16:30.000Z",\n        "literalType": "DATETIME"\n      }\n    }\n  },\n  "groupBy": {\n    "field": "UserId"\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"parsing-a-partial-query",children:"Parsing a partial query"}),"\n",(0,t.jsxs)(n.p,{children:["Added support for ",(0,t.jsx)(n.code,{children:"allowPartialQuery"})," in version ",(0,t.jsx)(n.code,{children:"4.4.0"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { parseQuery } from '@jetstreamapp/soql-parser-js';\n\nconst soql = `\n  WHERE LoginTime > 2010-09-20T22:16:30.000Z\n  AND LoginTime < 2010-09-21T22:16:30.000Z\n  GROUP BY UserId\n`;\n\nconst soqlQuery = parseQuery(soql, { allowPartialQuery: true });\n\nconsole.log(JSON.stringify(soqlQuery, null, 2));\n"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"Results (click to show)"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "where": {\n    "left": {\n      "field": "LoginTime",\n      "operator": ">",\n      "value": "2010-09-20T22:16:30.000Z",\n      "literalType": "DATETIME"\n    },\n    "operator": "AND",\n    "right": {\n      "left": {\n        "field": "LoginTime",\n        "operator": "<",\n        "value": "2010-09-21T22:16:30.000Z",\n        "literalType": "DATETIME"\n      }\n    }\n  },\n  "groupBy": {\n    "field": "UserId"\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"validating-queries",children:"Validating Queries"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { isQueryValid } from '@jetstreamapp/soql-parser-js';\n\nconst invalidSoql = `SELECT UserId, COUNT(Id) Account`;\nconst validSoql = `SELECT UserId, COUNT(Id) Account`;\n\nconsole.log(isQueryValid(soql));\nconsole.log(isQueryValid(soql));\n"})}),"\n",(0,t.jsx)(n.h3,{id:"composing-queries",children:"Composing Queries"}),"\n",(0,t.jsxs)(n.p,{children:["Build a ",(0,t.jsx)(n.code,{children:"Query"})," data structure to have it converted back into a SOQL query."]}),"\n",(0,t.jsxs)(n.p,{children:["Composing a query will turn a Query object back to a SOQL query string. The exact same data structure returned from ",(0,t.jsx)(n.code,{children:"parseQuery()"})," can be used,\nbut depending on your use-case, you may need to build your own data structure to compose a query.\nThese examples show building your own Query object with the minimum required fields."]}),"\n",(0,t.jsx)(n.p,{children:"Some utility methods have been provided to make it easier to build the field data structures."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Some operators may be converted to uppercase (e.x. NOT, AND)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," There are a number of fields populated on the Query object when ",(0,t.jsx)(n.code,{children:"parseQuery()"})," is called that are not required to compose a query. Look at the examples below and the comments in the data model for more information."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { composeQuery, getField, Query } from '@jetstreamapp/soql-parser-js';\n\n// Build a subquery\nconst oppLineItemsSubquery = {\n  fields: [\n    getField('Quantity'),\n    getField('ListPrice'),\n    getField({\n      field: 'UnitPrice',\n      relationships: ['PricebookEntry'],\n    }),\n    getField({\n      field: 'Name',\n      relationships: ['PricebookEntry'],\n    }),\n  ],\n  relationshipName: 'OpportunityLineItems',\n};\n\n// build the main query and add the subquery as a field\nconst soqlQuery: Query = {\n  fields: [\n    getField('Id'),\n    getField('Name'),\n    getField({\n      functionName: 'FORMAT',\n      parameters: 'Amount',\n      alias: 'MyFormattedAmount',\n    }),\n    getField({ subquery: oppLineItemsSubquery }),\n  ],\n  sObject: 'Opportunity',\n  where: {\n    left: {\n      field: 'CreatedDate',\n      operator: '>',\n      value: 'LAST_N_YEARS:1',\n    },\n    operator: 'AND',\n    right: {\n      left: {\n        field: 'StageName',\n        operator: '=',\n        value: 'Closed Won',\n        // literalType is optional, but if set to STRING and our value is not already wrapped in \"'\", they will be added\n        // All other literalType values are ignored when composing a query\n        literalType: 'STRING',\n      },\n    },\n  },\n  limit: 150,\n};\n\nconst composedQuery = composeQuery(soqlQuery, { format: true });\n\nconsole.log(composedQuery);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Results"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT Id, Name, FORMAT(Amount) MyFormattedAmount,\n  (\n    SELECT Quantity, ListPrice, PricebookEntry.UnitPrice,\n      PricebookEntry.Name\n    FROM OpportunityLineItems\n  )\nFROM Opportunity\nWHERE CreatedDate > LAST_N_YEARS:1\nAND StageName = 'Closed Won'\nLIMIT 150\n"})}),"\n",(0,t.jsx)(n.h3,{id:"composing-a-partial-query",children:"Composing a partial query"}),"\n",(0,t.jsxs)(n.p,{children:["Starting in version ",(0,t.jsx)(n.code,{children:"4.4"}),", compose will not fail if there are missing ",(0,t.jsx)(n.code,{children:"SELECT"})," and ",(0,t.jsx)(n.code,{children:"FROM"})," clauses in your query."]}),"\n",(0,t.jsx)(n.p,{children:"Partial compose support it supported without any additional steps."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Compose, parseQuery } from '@jetstreamapp/soql-parser-js';\n\nconst soql = `WHERE Name LIKE 'A%' AND MailingCity = 'California`;\nconst parsedQuery = parseQuery(soql, { allowPartialQuery: true });\n\n// Results of Parsed Query:\n/**\n{\n  where: {\n    left: { field: 'Name', operator: 'LIKE', value: \"'A%'\", literalType: 'STRING' },\n    operator: 'AND',\n    right: { left: { field: 'MailingCity', operator: '=', value: \"'California'\", literalType: 'STRING' } },\n  },\n}\n*/\n\nconst composedQuery = composeQuery(soqlQuery, { format: true });\n\nconsole.log(composedQuery);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Results"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"WHERE Name LIKE 'A%' AND MailingCity = 'California\n"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)("b",{children:"See the alternate way to compose partial queries by calling the Compose class directly"})}),(0,t.jsx)(n.p,{children:"If you need to compose just a part of a query instead of the entire query, you can create an instance of the Compose class directly."}),(0,t.jsxs)(n.p,{children:["For example, if you just need the ",(0,t.jsx)(n.code,{children:"WHERE"})," clause from a query as a string, you can do the following:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { Compose, parseQuery } from '@jetstreamapp/soql-parser-js';\n\nconst soql = `SELECT Id FROM Account WHERE Name = 'Foo'`;\nconst parsedQuery = parseQuery(soql);\n\n// Results of Parsed Query:\n  // const parsedQuery = {\n  //   fields: [\n  //     {\n  //       type: 'Field',\n  //       field: 'Id',\n  //     },\n  //   ],\n  //   sObject: 'Account',\n  //   where: {\n  //     left: {\n  //       field: 'Name',\n  //       operator: '=',\n  //       value: \"'Foo'\",\n  //       literalType: 'STRING',\n  //     },\n  //   },\n  // };\n\n  // Create a new instance of the compose class and set the autoCompose to false to avoid composing the entire query\n  const composer = new Compose(parsedQuery, { autoCompose: false });\n\n\n  const whereClause = composer.parseWhereOrHavingClause(parsedQuery.where);\n\n  console.log(whereClause);\n}\n"})}),(0,t.jsxs)(n.h4,{id:"available-methods-on-the-compose-class",children:["Available methods on the ",(0,t.jsx)(n.code,{children:"Compose"})," class"]}),(0,t.jsx)(n.p,{children:"These are used internally, but are public and available for use."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"parseQuery(query: Query | Subquery): string;\nparseFields(fields: FieldType[]): { text: string; typeOfClause?: string[] }[];\nparseTypeOfField(typeOfField: FieldTypeOf): string[];\nparseWhereOrHavingClause(whereOrHaving: WhereClause | HavingClause, tabOffset = 0, priorConditionIsNegation = false): string;\nparseGroupByClause(groupBy: GroupByClause | GroupByClause[]): string;\nparseOrderBy(orderBy: OrderByClause | OrderByClause[]): string;\nparseWithDataCategory(withDataCategory: WithDataCategoryClause): string;\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"format-query",children:"Format Query"}),"\n",(0,t.jsxs)(n.p,{children:["This function is provided as a convenience and just calls parse and compose.\n",(0,t.jsx)(n.a,{href:"https://paustint.github.io/soql-parser-js/",children:"Check out the demo"})," to see the outcome of the various format options."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { formatQuery } from '@jetstreamapp/soql-parser-js';\n\nconst query = `SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate, CreatedById, Type FROM Opportunities), (SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, Website FROM ChildAccounts) FROM Account WHERE Name LIKE 'a%' OR Name LIKE 'b%' OR Name LIKE 'c%'`;\n\nconst formattedQuery1 = formatQuery(query);\nconst formattedQuery2 = formatQuery(query, {\n  fieldMaxLineLength: 20,\n  fieldSubqueryParensOnOwnLine: false,\n  whereClauseOperatorsIndented: true,\n});\nconst formattedQuery3 = formatQuery(query, { fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: true });\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- formattedQuery1\nSELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,\n\tBillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy,\n\tShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type,\n\tWebsite,\n\t(\n\t\tSELECT Id, Name, AccountId, Amount, CampaignId, CloseDate,\n\t\t\tCreatedById, Type\n\t\tFROM Opportunities\n\t),\n\t(\n\t\tSELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,\n\t\t\tBillingAddress, Website\n\t\tFROM ChildAccounts\n\t)\nFROM Account\nWHERE Name LIKE 'a%'\nOR Name LIKE 'b%'\nOR Name LIKE 'c%'\n\n-- formattedQuery2\nSELECT Id, Name,\n\tAccountNumber, AccountSource,\n\tAnnualRevenue, BillingAddress,\n\tBillingCity, BillingCountry,\n\tBillingGeocodeAccuracy, ShippingStreet,\n\tSic, SicDesc, Site,\n\tSystemModstamp, TickerSymbol, Type,\n\tWebsite,\n\t(SELECT Id, Name,\n\t\tAccountId, Amount, CampaignId,\n\t\tCloseDate, CreatedById, Type\n\tFROM Opportunities),\n\t(SELECT Id, Name,\n\t\tAccountNumber, AccountSource,\n\t\tAnnualRevenue, BillingAddress,\n\t\tWebsite\n\tFROM ChildAccounts)\nFROM Account\nWHERE Name LIKE 'a%'\n\tOR Name LIKE 'b%'\n\tOR Name LIKE 'c%'\n\n\n-- formattedQuery3\nSELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,\n\tBillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy,\n\tShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type,\n\tWebsite,\n\t(\n\t\tSELECT Id, Name, AccountId, Amount, CampaignId, CloseDate,\n\t\t\tCreatedById, Type\n\t\tFROM Opportunities\n\t),\n\t(\n\t\tSELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,\n\t\t\tBillingAddress, Website\n\t\tFROM ChildAccounts\n\t)\nFROM Account\nWHERE Name LIKE 'a%'\n\tOR Name LIKE 'b%'\n\tOR Name LIKE 'c%'\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(7294);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);