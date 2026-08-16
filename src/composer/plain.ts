/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of the MIT license,
 * a copy of which has been included with this distribution in the LICENSE.txt file.
 */
import { HavingClause, Query, Subquery, WhereClause } from '../api/api-models';
import * as utils from '../utils';
import { queryClauses, renderConditionLhs, renderConditionValue, renderFieldText } from './leaf';

/**
 * Composes a query (or subquery) to a single-line SOQL string without any formatting.
 * This is the `format: false` path of `composeQuery()`.
 * @param query
 * @returns query
 */
export function composePlain(query: Query | Subquery): string {
  const parts: string[] = [];

  for (const part of queryClauses(query)) {
    switch (part.kind) {
      case 'select': {
        const fields = part.fields.map(field =>
          field.type === 'FieldSubquery' ? `(${composePlain(field.subquery)})` : renderFieldText(field),
        );
        parts.push(`SELECT ${fields.join(', ')}`);
        break;
      }
      case 'value':
        parts.push(`${part.keyword} ${part.value}`);
        break;
      case 'bare':
        parts.push(part.keyword);
        break;
      case 'list':
        parts.push(`${part.keyword} ${part.items.join(', ')}`);
        break;
      case 'conditions':
        parts.push(`${part.keyword} ${composePlainConditions(part.clause)}`);
        break;
    }
  }

  return parts.join(' ').trim();
}

/**
 * Composes a WHERE or HAVING clause (without the keyword) to a single-line string without any formatting.
 * e.x.: `Name LIKE 'a%' AND (Id IN (SELECT AccountId FROM Contact) OR NOT Foo = 'bar')`
 * @param whereOrHaving
 * @returns where or having clause
 */
export function composePlainConditions(whereOrHaving: WhereClause | HavingClause): string {
  let output = '';
  let node: WhereClause | HavingClause | undefined = whereOrHaving;
  while (node) {
    const left = node.left;
    if (utils.isNegationCondition(left)) {
      output += utils.generateParens(left.openParen, '(');
    } else if (left) {
      output += utils.generateParens(left.openParen ?? 0, '(');
      output += `${renderConditionLhs(left)} `;
      output += utils.isValueQueryCondition(left) ? `(${composePlain(left.valueQuery)})` : renderConditionValue(left);
      output += utils.generateParens(left.closeParen ?? 0, ')');
    }
    if (utils.isWhereOrHavingClauseWithRightCondition(node)) {
      output += node.operator === 'NOT' ? 'NOT ' : ` ${node.operator} `;
      node = node.right;
    } else {
      node = undefined;
    }
  }
  return output;
}
