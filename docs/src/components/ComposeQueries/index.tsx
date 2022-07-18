import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { composeQuery, parseQuery } from 'soql-parser-js';
import ParsedOutput from './ParsedOutput';
import QueryInput from './QueryInput';

export interface ComposeQueriesProps {
  selectedQuery: string;
}

export default function ComposeQueries({ selectedQuery }: ComposeQueriesProps) {
  const [formatQuery, setFormatQuery] = useState(true);
  const [numIndent, setNumIndent] = useState(1);
  const [fieldMaxLineLength, setFieldMaxLineLength] = useState(60);
  const [fieldSubqueryParensOnOwnLine, setFieldSubqueryParensOnOwnLine] = useState(true);
  const [newLineAfterKeywords, setNewLineAfterKeywords] = useState(false);

  const [queryObj, setQueryObj] = useState<string>('');
  const [parsedQuery, setParsedQuery] = useState('');

  useEffect(() => {
    try {
      setQueryObj(JSON.stringify(parseQuery(selectedQuery, { allowApexBindVariables: true }), null, 2));
    } catch (ex) {
      setQueryObj('{\n}');
    }
  }, [selectedQuery]);

  useEffect(() => {
    try {
      if (queryObj) {
        setParsedQuery(
          composeQuery(JSON.parse(queryObj), {
            format: formatQuery,
            formatOptions: {
              fieldMaxLineLength,
              fieldSubqueryParensOnOwnLine,
              newLineAfterKeywords,
              numIndent,
            },
          }),
        );
      }
    } catch (ex) {
      // ignore
    }
  }, [queryObj, formatQuery, numIndent, fieldMaxLineLength, fieldSubqueryParensOnOwnLine, newLineAfterKeywords]);

  function handleQueryChange(value: string) {
    setQueryObj(value);
  }

  return (
    <>
      <QueryInput queryObj={queryObj} onChange={handleQueryChange} />
      <fieldset>
        <legend className="label">Parse Options</legend>
        <div>
          <label title="Set this to true to apply formatting to the parsed query">
            <input type="checkbox" checked={formatQuery} onChange={event => setFormatQuery(event.target.checked)} />
            formatQuery
          </label>
        </div>
        <div>
          <label className={clsx({ disabled: !formatQuery })} title="The number of tab characters to indent.">
            numIndent
            <input
              disabled={!formatQuery}
              type="number"
              min={0}
              value={numIndent}
              onChange={event => setNumIndent(Number(event.target.value ?? 0))}
            />
          </label>
        </div>
        <div>
          <label
            className={clsx({ disabled: !formatQuery })}
            title="The number of characters that the fields should take up before making a new line. Set this to 1 or 0 to have every field on its own line."
          >
            fieldMaxLineLength
            <input
              disabled={!formatQuery}
              type="number"
              min={0}
              value={fieldMaxLineLength}
              onChange={event => setFieldMaxLineLength(Number(event.target.value ?? 0))}
            />
          </label>
        </div>
        <div>
          <label
            className={clsx({ disabled: !formatQuery })}
            title="If true, the opening and closing parentheses will be on their own line for subqueries."
          >
            <input
              disabled={!formatQuery}
              type="checkbox"
              checked={fieldSubqueryParensOnOwnLine}
              onChange={event => setFieldSubqueryParensOnOwnLine(event.target.checked)}
            />
            fieldSubqueryParensOnOwnLine
          </label>
        </div>
        <div>
          <label
            className={clsx({ disabled: !formatQuery })}
            title="Adds a new line and indent after all keywords (such as SELECT, FROM, WHERE, ORDER BY, etc..) Setting this to true will add new lines in other places as well, such as complex WHERE clauses."
          >
            <input
              disabled={!formatQuery}
              type="checkbox"
              checked={newLineAfterKeywords}
              onChange={event => setNewLineAfterKeywords(event.target.checked)}
            />
            newLineAfterKeywords
          </label>
        </div>
      </fieldset>
      <ParsedOutput query={parsedQuery} />
    </>
  );
}
