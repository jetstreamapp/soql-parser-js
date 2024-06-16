import React from 'react';
import { Highlight } from '../../Utilities/Highlight';

export interface ParsedOutputProps {
  query: string;
}

export default function ParsedOutput({ query }: ParsedOutputProps): JSX.Element {
  return (
    <div className="">
      {query && (
        <>
          <div className="label">Output</div>
          <Highlight code={query} language="sql" />
        </>
      )}
    </div>
  );
}
