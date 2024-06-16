"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[372],{8658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(5893),i=t(1151);const o={sidebar_position:1},a="Overview",s={id:"overview",title:"Overview",description:"This library allows parsing and composing (aka generating) SOQL queries from Salesforce using JavaScript or Typescript.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/jetstreamapp/soql-parser-js/docs/docs/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API",permalink:"/docs/api"}},l={},d=[{value:"Parse a query",id:"parse-a-query",level:2},{value:"Compose a query from an object",id:"compose-a-query-from-an-object",level:2},{value:"Compose using helper functions",id:"compose-using-helper-functions",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Data Models",id:"data-models",level:2},{value:"Query",id:"query",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"This library allows parsing and composing (aka generating) SOQL queries from Salesforce using JavaScript or Typescript."})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/playground",children:"playground"})," is a great place to get familiar with soql-parser-js."]}),"\n",(0,r.jsx)(n.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(n.p,{children:"These are the most common functions exported by the library:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Arguments"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parseQuery"}),(0,r.jsx)(n.td,{children:"Parse a SOQL query string into a Query data structure."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"soql: string"}),", ",(0,r.jsx)(n.code,{children:"config?: ParseQueryConfig"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"composeQuery"}),(0,r.jsx)(n.td,{children:"Turn a Query object back into a SOQL statement."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"query: Query"}),", ",(0,r.jsx)(n.code,{children:"config?: SoqlComposeConfig"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isQueryValid"}),(0,r.jsx)(n.td,{children:"Returns true if the query was able to be parsed."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"soql: string"}),", ",(0,r.jsx)(n.code,{children:"config?: ParseQueryConfig"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatQuery"}),(0,r.jsx)(n.td,{children:"Format a SOQL query string."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"soql: string"}),", ",(0,r.jsx)(n.code,{children:"config?: FormatOptions"})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"parse-a-query",children:"Parse a query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { parseQuery, Query } from '@jetstreamapp/soql-parser-js';\n\nconst query = parseQuery(`SELECT Id FROM Account WHERE Name = 'foo'`);\n\nconsole.log(query);\n\n// Generated Query\n// {\n//   fields: [\n//     {\n//       type: 'Field',\n//       field: 'Id',\n//     },\n//   ],\n//   sObject: 'Account',\n//   where: {\n//     left: {\n//       field: 'Name',\n//       operator: '=',\n//       value: \"'Foo'\",\n//       literalType: 'STRING',\n//     },\n//   },\n// }\n"})}),"\n",(0,r.jsx)(n.h2,{id:"compose-a-query-from-an-object",children:"Compose a query from an object"}),"\n",(0,r.jsx)(n.p,{children:"Composing a query will take a query object and return a soql query."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { composeQuery, Query } from '@jetstreamapp/soql-parser-js';\n\nconst query = {\n  fields: [\n    {\n      type: 'Field',\n      field: 'Id',\n    },\n  ],\n  sObject: 'Account',\n  where: {\n    left: {\n      field: 'Name',\n      operator: '=',\n      value: \"'Foo'\",\n      literalType: 'STRING',\n    },\n  },\n};\n\nconst soql = composeQuery(query);\n\nconsole.log(soql);\n\n// SELECT Id FROM Account WHERE Name = 'foo'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"compose-using-helper-functions",children:"Compose using helper functions"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"getField"})," helper function to simplify the field generation. Read the api docs for more information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { composeQuery, getField } from '@jetstreamapp/soql-parser-js';\n\nconst soql = composeQuery({\n  fields: [\n    getField('Id'),\n    getField('Name'),\n    getField('EntityDefinitionId'),\n    getField('EntityDefinition.QualifiedApiName'),\n    getField('IsIdLookup'),\n    getField('DataType'),\n    getField('ValueTypeId'),\n    getField('ReferenceTo'),\n    getField('IsCreatable'),\n    getField('IsUpdatable'),\n    getField('Label'),\n    getField('MasterLabel'),\n    getField('QualifiedApiName'),\n    getField('RelationshipName'),\n  ],\n  sObject: 'EntityParticle',\n  where: {\n    left: {\n      field: 'EntityDefinition.QualifiedApiName',\n      operator: 'IN',\n      value: sobjects,\n      literalType: 'STRING',\n    },\n    operator: 'AND',\n    right: {\n      left: {\n        field: 'QualifiedApiName',\n        operator: '!=',\n        value: 'Id',\n        literalType: 'STRING',\n      },\n      operator: 'AND',\n      right: {\n        left: {\n          field: 'DataType',\n          operator: 'IN',\n          value: ['string', 'phone', 'url', 'email'],\n          literalType: 'STRING',\n        },\n      },\n    },\n  },\n  orderBy: [\n    {\n      field: 'EntityDefinitionId',\n    },\n    { field: 'Label' },\n  ],\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsxs)(n.p,{children:["All contributions are welcome on the project. Please read the ",(0,r.jsx)(n.a,{href:"https://github.com/paustint/soql-parser-js/blob/master/CONTRIBUTING.md",children:"contribution guidelines"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"data-models",children:"Data Models"}),"\n",(0,r.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type LogicalOperator = 'AND' | 'OR' | 'NOT';\nexport type Operator = '=' | '!=' | '<=' | '>=' | '>' | '<' | 'LIKE' | 'IN' | 'NOT IN' | 'INCLUDES' | 'EXCLUDES';\nexport type FieldTypeOfConditionType = 'WHEN' | 'ELSE';\nexport type GroupSelector = 'ABOVE' | 'AT' | 'BELOW' | 'ABOVE_OR_BELOW';\nexport type ForClause = 'VIEW' | 'UPDATE' | 'REFERENCE';\nexport type UpdateClause = 'TRACKING' | 'VIEWSTAT';\nexport type LiteralType =\n  | 'STRING'\n  | 'INTEGER'\n  | 'DECIMAL'\n  | 'INTEGER_WITH_CURRENCY_PREFIX'\n  | 'DECIMAL_WITH_CURRENCY_PREFIX'\n  | 'BOOLEAN'\n  | 'NULL'\n  | 'DATETIME'\n  | 'DATE'\n  | 'DATE_LITERAL'\n  | 'DATE_N_LITERAL'\n  | 'APEX_BIND_VARIABLE';\nexport type FieldType =\n  | Field\n  | FieldWithAlias\n  | FieldFunctionExpression\n  | FieldRelationship\n  | FieldRelationshipWithAlias\n  | FieldSubquery\n  | FieldTypeOf;\nexport type OrderByCriterion = 'ASC' | 'DESC';\nexport type NullsOrder = 'FIRST' | 'LAST';\nexport type GroupByType = 'CUBE' | 'ROLLUP';\nexport type DateLiteral =\n  | 'YESTERDAY'\n  | 'TODAY'\n  | 'TOMORROW'\n  | 'LAST_WEEK'\n  | 'THIS_WEEK'\n  | 'NEXT_WEEK'\n  | 'LAST_MONTH'\n  | 'THIS_MONTH'\n  | 'NEXT_MONTH'\n  | 'LAST_90_DAYS'\n  | 'NEXT_90_DAYS'\n  | 'THIS_QUARTER'\n  | 'LAST_QUARTER'\n  | 'NEXT_QUARTER'\n  | 'THIS_YEAR'\n  | 'LAST_YEAR'\n  | 'NEXT_YEAR'\n  | 'THIS_FISCAL_QUARTER'\n  | 'LAST_FISCAL_QUARTER'\n  | 'NEXT_FISCAL_QUARTER'\n  | 'THIS_FISCAL_YEAR'\n  | 'LAST_FISCAL_YEAR'\n  | 'NEXT_FISCAL_YEAR';\n\nexport type DateNLiteral =\n  | 'YESTERDAY'\n  | 'NEXT_N_DAYS'\n  | 'LAST_N_DAYS'\n  | 'N_DAYS_AGO'\n  | 'NEXT_N_WEEKS'\n  | 'LAST_N_WEEKS'\n  | 'N_WEEKS_AGO'\n  | 'NEXT_N_MONTHS'\n  | 'LAST_N_MONTHS'\n  | 'N_MONTHS_AGO'\n  | 'NEXT_N_QUARTERS'\n  | 'LAST_N_QUARTERS'\n  | 'N_QUARTERS_AGO'\n  | 'NEXT_N_YEARS'\n  | 'LAST_N_YEARS'\n  | 'N_YEARS_AGO'\n  | 'NEXT_N_FISCAL_QUARTERS'\n  | 'LAST_N_FISCAL_QUARTERS'\n  | 'N_FISCAL_QUARTERS_AGO'\n  | 'NEXT_N_FISCAL_YEARS'\n  | 'LAST_N_FISCAL_YEARS'\n  | 'N_FISCAL_YEARS_AGO';\n\nexport interface Field {\n  type: 'Field';\n  field: string;\n  alias?: string;\n}\n\nexport interface FieldWithAlias extends Field {\n  objectPrefix: string;\n  rawValue: string;\n}\n\nexport interface FieldFunctionExpression {\n  type: 'FieldFunctionExpression';\n  functionName: string;\n  parameters: (string | FieldFunctionExpression)[];\n  alias?: string;\n  isAggregateFn?: boolean; // not required for compose, will be populated if SOQL is parsed\n  rawValue?: string; // not required for compose, will be populated if SOQL is parsed\n}\n\nexport interface FieldRelationship {\n  type: 'FieldRelationship';\n  field: string;\n  relationships: string[];\n  rawValue?: string; // not required for compose, will be populated if SOQL is parsed with the raw value of the entire field\n}\n\nexport interface FieldRelationshipWithAlias extends FieldRelationship {\n  objectPrefix: string;\n  alias: string;\n}\n\nexport interface FieldSubquery {\n  type: 'FieldSubquery';\n  subquery: Subquery;\n}\n\nexport interface FieldTypeOf {\n  type: 'FieldTypeof';\n  field: string;\n  conditions: FieldTypeOfCondition[];\n}\n\nexport interface FieldTypeOfCondition {\n  type: FieldTypeOfConditionType;\n  objectType?: string; // not present when ELSE\n  fieldList: string[];\n}\n\nexport interface QueryBase {\n  fields?: FieldType[];\n  sObjectAlias?: string;\n  usingScope?: string;\n  where?: WhereClause;\n  limit?: number;\n  offset?: number;\n  groupBy?: GroupByClause;\n  orderBy?: OrderByClause | OrderByClause[];\n  withDataCategory?: WithDataCategoryClause;\n  withSecurityEnforced?: boolean;\n  withAccessLevel?: boolean;\n  for?: ForClause;\n  update?: UpdateClause;\n}\n\nexport interface Query extends QueryBase {\n  sObject?: string;\n}\n\nexport interface Subquery extends QueryBase {\n  relationshipName: string;\n  sObjectPrefix?: string[];\n}\n\nexport type WhereClause = WhereClauseWithoutOperator | WhereClauseWithRightCondition;\n\nexport interface WhereClauseWithoutOperator {\n  left: ConditionWithValueQuery;\n}\n\nexport interface WhereClauseWithRightCondition extends WhereClauseWithoutOperator {\n  operator: LogicalOperator;\n  right: WhereClause;\n}\n\nexport type Condition =\n  | ValueCondition\n  | ValueWithDateLiteralCondition\n  | ValueWithDateNLiteralCondition\n  | ValueFunctionCondition\n  | NegationCondition;\n\nexport type ConditionWithValueQuery = Condition | ValueQueryCondition;\n\nexport interface OptionalParentheses {\n  openParen?: number;\n  closeParen?: number;\n}\n\nexport interface ValueCondition extends OptionalParentheses {\n  field: string;\n  operator: Operator;\n  value: string | string[];\n  literalType?: LiteralType | LiteralType[];\n}\n\nexport interface ValueWithDateLiteralCondition extends OptionalParentheses {\n  field: string;\n  operator: Operator;\n  value: DateLiteral | DateLiteral[];\n  literalType?: 'DATE_LITERAL' | 'DATE_LITERAL'[];\n}\n\nexport interface ValueWithDateNLiteralCondition extends OptionalParentheses {\n  field: string;\n  operator: Operator;\n  value: string | string[];\n  literalType?: 'DATE_N_LITERAL' | 'DATE_N_LITERAL'[];\n  dateLiteralVariable: number | number[];\n}\n\nexport interface ValueQueryCondition extends OptionalParentheses {\n  field: string;\n  operator: Operator;\n  valueQuery: Query;\n}\n\nexport interface ValueFunctionCondition extends OptionalParentheses {\n  fn: FunctionExp;\n  operator: Operator;\n  value: string | string[];\n  literalType?: LiteralType | LiteralType[];\n}\n\nexport interface NegationCondition {\n  openParen: number;\n}\n\nexport type OrderByClause = OrderByFieldClause | OrderByFnClause;\n\nexport interface OrderByOptionalFieldsClause {\n  order?: OrderByCriterion;\n  nulls?: NullsOrder;\n}\n\nexport interface OrderByFieldClause extends OrderByOptionalFieldsClause {\n  field: string;\n}\n\nexport interface OrderByFnClause extends OrderByOptionalFieldsClause {\n  fn: FunctionExp;\n}\n\nexport type GroupByClause = GroupByFieldClause | GroupByFnClause;\n\nexport interface GroupByOptionalFieldsClause {\n  having?: HavingClause;\n}\n\nexport interface GroupByFieldClause extends GroupByOptionalFieldsClause {\n  field: string | string[];\n}\n\nexport interface GroupByFnClause extends GroupByOptionalFieldsClause {\n  fn: FunctionExp;\n}\n\nexport type HavingClause = HavingClauseWithoutOperator | HavingClauseWithRightCondition;\n\nexport interface HavingClauseWithoutOperator {\n  left: Condition;\n}\n\nexport interface HavingClauseWithRightCondition extends HavingClauseWithoutOperator {\n  operator: LogicalOperator;\n  right: HavingClause;\n}\n\nexport interface FunctionExp {\n  rawValue?: string; // only used for compose fields if useRawValueForFn=true. Should be formatted like this: Count(Id)\n  functionName?: string; // only used for compose fields if useRawValueForFn=false, will be populated if SOQL is parsed\n  alias?: string;\n  parameters?: (string | FunctionExp)[]; // only used for compose fields if useRawValueForFn=false, will be populated if SOQL is parsed\n  isAggregateFn?: boolean; // not used for compose, will be populated if SOQL is parsed\n}\n\nexport interface WithDataCategoryClause {\n  conditions: WithDataCategoryCondition[];\n}\n\nexport interface WithDataCategoryCondition {\n  groupName: string;\n  selector: GroupSelector;\n  parameters: string[];\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(7294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);