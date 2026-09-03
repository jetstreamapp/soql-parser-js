import { FormulaArithmeticOperator, FormulaBinaryExpression, FormulaFieldReference, FormulaFunctionExp } from './api/api-models';
import { isNil } from './utils';

const IDENTIFIER = '[A-Za-z][A-Za-z0-9_]*';
const FIELD_REFERENCE = `${IDENTIFIER}(?:\\.${IDENTIFIER})*`;
const FORMULA_EXPRESSION = new RegExp(`^\\s*(${FIELD_REFERENCE})\\s*([+-])\\s*(${FIELD_REFERENCE})\\s*$`);
// A single segment of a field reference, i.e. one entry of `FormulaFieldReference.parts`
const FIELD_PART = new RegExp(`^${IDENTIFIER}$`);

export function isFormulaFunction(value: any): value is FormulaFunctionExp {
  return value?.functionName === 'FORMULA' && !isNil(value.formula);
}

function fieldReference(value: string): FormulaFieldReference {
  return {
    type: 'FieldReference',
    parts: value.split('.'),
  };
}

/**
 * Parses the quoted body of a `FORMULA()` call into a nested AST.
 * Returns `undefined` when the source does not match the supported grammar (two field references joined by `+` or `-`)
 * so the caller can report the error through the parser's normal error handling.
 */
export function parseFormulaExpression(source: string): FormulaBinaryExpression | undefined {
  const match = FORMULA_EXPRESSION.exec(source);
  if (!match) {
    return undefined;
  }

  return {
    type: 'BinaryExpression',
    operator: match[2] as FormulaArithmeticOperator,
    left: fieldReference(match[1]),
    right: fieldReference(match[3]),
  };
}

function isFieldReferenceParts(parts: unknown): parts is string[] {
  return Array.isArray(parts) && parts.length > 0 && parts.every(part => typeof part === 'string' && FIELD_PART.test(part));
}

/**
 * Renders a formula AST back to its normalized source form, e.g. `Amount - ExpectedRevenue`.
 * Used by the composer and to populate `parameters` when parsing.
 * Throws when a hand-built AST does not describe two field references joined by `+` or `-`,
 * so a malformed formula never composes to invalid SOQL silently.
 */
export function renderFormulaExpression(formula: FormulaBinaryExpression): string {
  const left = formula?.left?.parts;
  const right = formula?.right?.parts;
  const operator = formula?.operator;
  if ((operator !== '+' && operator !== '-') || !isFieldReferenceParts(left) || !isFieldReferenceParts(right)) {
    throw new Error('Invalid FORMULA expression. Expected two field references separated by + or -.');
  }
  return `${left.join('.')} ${operator} ${right.join('.')}`;
}
