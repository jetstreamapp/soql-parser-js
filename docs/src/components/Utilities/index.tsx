import React from 'react';
import {
  FieldFunctionExpression,
  FieldSubquery,
  getField,
  getFlattenedFields,
  GroupByFieldClause,
  GroupByFnClause,
  hasAlias,
  HavingClause,
  isFieldSubquery,
  isGroupByField,
  isGroupByFn,
  isHavingClauseWithRightCondition,
  isOrderByField,
  isOrderByFn,
  isSubquery,
  isValueCondition,
  isValueFunctionCondition,
  isValueQueryCondition,
  isValueWithDateLiteralCondition,
  isValueWithDateNLiteralCondition,
  isWhereClauseWithRightCondition,
  isWhereOrHavingClauseWithRightCondition,
  OrderByFieldClause,
  OrderByFnClause,
  Query,
  Subquery,
  ValueCondition,
  ValueFunctionCondition,
  ValueQueryCondition,
  ValueWithDateLiteralCondition,
  ValueWithDateNLiteralCondition,
  WhereClause,
} from 'soql-parser-js';

const sampleQuery: Query = {
  fields: [
    {
      type: 'Field',
      field: 'Id',
    },
    {
      type: 'Field',
      field: 'Name',
    },
    {
      type: 'FieldRelationship',
      field: 'Name',
      relationships: ['Account'],
      rawValue: 'Account.Name',
    },
  ],
  sObject: 'Contact',
};

const fieldWithAlias: FieldFunctionExpression = {
  type: 'FieldFunctionExpression',
  functionName: 'FORMAT',
  parameters: [
    {
      type: 'FieldFunctionExpression',
      functionName: 'MIN',
      parameters: ['closedate'],
      isAggregateFn: true,
      rawValue: 'MIN(closedate)',
    },
  ],
  rawValue: 'FORMAT(MIN(closedate))',
  alias: 'Amt',
};

const subquery: Subquery = {
  fields: [
    {
      type: 'Field',
      field: 'Name',
    },
  ],
  relationshipName: 'Line_Items__r',
};

const fieldSubquery: FieldSubquery = {
  type: 'FieldSubquery',
  subquery: subquery,
};

const whereClause: WhereClause = {
  left: {
    field: 'LoginTime',
    operator: '>',
    value: '2010-09-20T22:16:30.000Z',
    literalType: 'DATETIME',
  },
  operator: 'AND',
  right: {
    left: {
      field: 'LoginTime',
      operator: '<',
      value: '2010-09-21',
      literalType: 'DATE',
    },
  },
};

const havingClause: HavingClause = {
  left: {
    fn: {
      functionName: 'COUNT',
      parameters: ['Id'],
      rawValue: 'COUNT(Id)',
    },
    operator: '>',
    value: '1',
    literalType: 'INTEGER',
  },
};

const valueCondition: ValueCondition = {
  field: 'Amount',
  operator: 'IN',
  value: ['usd500.01', 'usd600'],
  literalType: ['DECIMAL_WITH_CURRENCY_PREFIX', 'INTEGER_WITH_CURRENCY_PREFIX'],
};

const valueWithDateLiteral: ValueWithDateLiteralCondition = {
  field: 'CreatedDate',
  operator: 'IN',
  value: ['TODAY'],
  literalType: 'DATE_LITERAL',
};

const valueWithDateNLiteral: ValueWithDateNLiteralCondition = {
  field: 'CreatedDate',
  operator: 'IN',
  value: ['LAST_N_DAYS:2'],
  literalType: 'DATE_N_LITERAL',
  dateLiteralVariable: [2],
};

const valueFunctionCondition: ValueFunctionCondition = {
  fn: {
    functionName: 'DISTANCE',
    parameters: [
      'Location__c',
      {
        functionName: 'GEOLOCATION',
        parameters: ['37.775', '-122.418'],
        rawValue: 'GEOLOCATION(37.775, -122.418)',
      },
      "'mi'",
    ],
    rawValue: "DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), 'mi')",
  },
  operator: '<',
  value: '20',
  literalType: 'INTEGER',
};

const valueQuery: ValueQueryCondition = {
  field: 'CreatedById',
  operator: 'IN',
  valueQuery: {
    fields: [
      {
        type: 'FieldTypeof',
        field: 'Owner',
        conditions: [
          {
            type: 'WHEN',
            objectType: 'User',
            fieldList: ['Id'],
          },
          {
            type: 'WHEN',
            objectType: 'Group',
            fieldList: ['CreatedById'],
          },
        ],
      },
    ],
    sObject: 'CASE',
  },
};

const orderByField: OrderByFieldClause = {
  field: 'Name',
  order: 'DESC',
  nulls: 'LAST',
};

const orderByFn: OrderByFnClause = {
  fn: {
    functionName: 'COUNT',
    parameters: ['Id'],
    rawValue: 'COUNT(Id)',
  },
  order: 'DESC',
};

const groupByField: GroupByFieldClause = {
  field: 'LeadSource',
};

const groupByFn: GroupByFnClause = {
  fn: {
    functionName: 'CUBE',
    parameters: ['Type', 'BillingCountry'],
    rawValue: 'CUBE(Type, BillingCountry)',
  },
};
// TODO: seems buggy
// isNegationCondition

const utilityFns = [
  {
    label: `hasAlias(value)`,
    input: `hasAlias(${JSON.stringify(fieldWithAlias, null, 2)});`,
    output: JSON.stringify(hasAlias(fieldWithAlias), null, 2) || 'false',
  },
  {
    label: `getField(value)`,
    input: `getField(${'Name'});`,
    output: JSON.stringify(getField('Name'), null, 2) || 'false',
  },
  {
    label: `getFlattenedFields(value)`,
    input: `getFlattenedFields(${JSON.stringify(sampleQuery, null, 2)});`,
    output: JSON.stringify(getFlattenedFields(sampleQuery), null, 2) || 'false',
  },
  {
    label: `isSubquery(value)`,
    input: `isSubquery(${JSON.stringify(subquery, null, 2)});`,
    output: JSON.stringify(isSubquery(subquery), null, 2) || 'false',
  },
  {
    label: `isFieldSubquery(value)`,
    input: `isFieldSubquery(${JSON.stringify(fieldSubquery, null, 2)});`,
    output: JSON.stringify(isFieldSubquery(fieldSubquery), null, 2) || 'false',
  },
  {
    label: `isWhereClauseWithRightCondition(value)`,
    input: `isWhereClauseWithRightCondition(${JSON.stringify(whereClause, null, 2)});`,
    output: JSON.stringify(isWhereClauseWithRightCondition(whereClause), null, 2) || 'false',
  },
  {
    label: `isHavingClauseWithRightCondition(value)`,
    input: `isHavingClauseWithRightCondition(${JSON.stringify(havingClause, null, 2)});`,
    output: JSON.stringify(isHavingClauseWithRightCondition(havingClause), null, 2) || 'false',
  },
  {
    label: `isWhereOrHavingClauseWithRightCondition(value)`,
    input: `isWhereOrHavingClauseWithRightCondition(${JSON.stringify(whereClause, null, 2)});`,
    output: JSON.stringify(isWhereOrHavingClauseWithRightCondition(whereClause), null, 2) || 'false',
  },
  {
    label: `isValueCondition(value)`,
    input: `isValueCondition(${JSON.stringify(valueCondition, null, 2)});`,
    output: JSON.stringify(isValueCondition(valueCondition), null, 2) || 'false',
  },
  {
    label: `isValueWithDateLiteralCondition(value)`,
    input: `isValueWithDateLiteralCondition(${JSON.stringify(valueWithDateLiteral, null, 2)});`,
    output: JSON.stringify(isValueWithDateLiteralCondition(valueWithDateLiteral), null, 2) || 'false',
  },
  {
    label: `isValueWithDateNLiteralCondition(value)`,
    input: `isValueWithDateNLiteralCondition(${JSON.stringify(valueWithDateNLiteral, null, 2)});`,
    output: JSON.stringify(isValueWithDateNLiteralCondition(valueWithDateNLiteral), null, 2) || 'false',
  },
  {
    label: `isValueFunctionCondition(value)`,
    input: `isValueFunctionCondition(${JSON.stringify(valueFunctionCondition, null, 2)});`,
    output: JSON.stringify(isValueFunctionCondition(valueFunctionCondition), null, 2) || 'false',
  },
  {
    label: `isNegationCondition(value)`,
    input: `TODO`,
    output: 'TODO',
  },
  {
    label: `isValueQueryCondition(value)`,
    input: `isValueQueryCondition(${JSON.stringify(valueQuery, null, 2)});`,
    output: JSON.stringify(isValueQueryCondition(valueQuery), null, 2) || 'false',
  },
  {
    label: `isOrderByField(value)`,
    input: `isOrderByField(${JSON.stringify(orderByField, null, 2)});`,
    output: JSON.stringify(isOrderByField(orderByField), null, 2) || 'false',
  },
  {
    label: `isOrderByFn(value)`,
    input: `isOrderByFn(${JSON.stringify(orderByFn, null, 2)});`,
    output: JSON.stringify(isOrderByFn(orderByFn), null, 2) || 'false',
  },
  {
    label: `isGroupByField(value)`,
    input: `isGroupByField(${JSON.stringify(groupByField, null, 2)});`,
    output: JSON.stringify(isGroupByField(groupByField), null, 2) || 'false',
  },
  {
    label: `isGroupByFn(value)`,
    input: `isGroupByFn(${JSON.stringify(groupByFn, null, 2)});`,
    output: JSON.stringify(isGroupByFn(groupByFn), null, 2) || 'false',
  },
];

export interface UtilitiesProps {}

export default function Utilities({}: UtilitiesProps) {
  return (
    <>
      {utilityFns.map(item => (
        <div key={item.label}>
          <div className="label label--large">{item.label}</div>
          <div className="row">
            <div className="col col--6">
              <div>Input</div>
              <pre>
                <code>{item.input}</code>
              </pre>
            </div>
            <div className="col col--6">
              <div>Output</div>
              <pre>
                <code>{item.output}</code>
              </pre>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
