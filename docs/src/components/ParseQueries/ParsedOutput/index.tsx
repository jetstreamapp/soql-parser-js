import React, { useEffect, useState } from 'react';
import { parseQuery, Query } from 'soql-parser-js';

export interface ParsedOutputProps {
  query: string;
}

export default function ParsedOutput({ query }: ParsedOutputProps): JSX.Element {
  const [allowPartialQuery, setAllowPartialQuery] = useState(true);
  const [ignoreParseErrors, setIgnoreParseErrors] = useState(false);
  const [allowApexBindVariables, setAllowApexBindVariables] = useState(true);
  const [parsedQuery, setParsedQuery] = useState<Query | null>(null);
  const [invalidMessage, setInvalidMessage] = useState<string | null>(null);

  // TODO: debounce
  useEffect(() => {
    try {
      if (query) {
        setParsedQuery(parseQuery(query, { allowPartialQuery, ignoreParseErrors, allowApexBindVariables }));
      }
    } catch (ex) {
      setParsedQuery(null);
      setInvalidMessage(ex.message);
    }
  }, [query, allowPartialQuery, ignoreParseErrors, allowApexBindVariables]);

  return (
    <div className="">
      <fieldset>
        <legend className="label">Parse Options</legend>
        <div>
          <label title="Determines if apex variables are allowed in parsed query. Example: `WHERE Id IN :accountIds`. Only simple Apex is supported. Function calls are not supported. (e.x. `accountMap.keyset()` is not supported)">
            <input type="checkbox" checked={allowApexBindVariables} onChange={event => setAllowApexBindVariables(event.target.checked)} />
            allowApexBindVariables
          </label>
        </div>
        <div>
          <label title="If provided, you can provide an incomplete soql query. This is useful if you need to parse WHERE clauses, for example. Subqueries are required to be valid.">
            <input type="checkbox" checked={allowPartialQuery} onChange={event => setAllowPartialQuery(event.target.checked)} />
            allowPartialQuery
          </label>
        </div>
        <div>
          <label title="If set to true, then queries with partially invalid syntax will still be parsed, but any clauses with invalid parts will be omitted. The SELECT clause and FROM clause must always be valid, but all other clauses can contain invalid parts.">
            <input type="checkbox" checked={ignoreParseErrors} onChange={event => setIgnoreParseErrors(event.target.checked)} />
            ignoreParseErrors
          </label>
        </div>
      </fieldset>
      {(parsedQuery || invalidMessage) && (
        <>
          <div className="label">Output</div>
          <pre>
            <code>{parsedQuery ? JSON.stringify(parsedQuery, null, 2) : invalidMessage}</code>
          </pre>
        </>
      )}
    </div>
  );
}
