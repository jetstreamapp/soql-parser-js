import React from 'react';

export interface ParsedOutputProps {
  query: string;
}

export default function ParsedOutput({ query }: ParsedOutputProps): JSX.Element {
  return (
    <div className="">
      {query && (
        <>
          <div className="label">Output</div>
          <pre>
            <code>{query}</code>
          </pre>
        </>
      )}
    </div>
  );
}
