import React, { useEffect, useState } from 'react';
import ParsedOutput from './ParsedOutput';
import SoqlInput from './SoqlInput';

export interface ParseQueriesProps {
  selectedQuery: string;
}

export default function ParseQueries({ selectedQuery }: ParseQueriesProps) {
  const [query, setQuery] = useState<string>(selectedQuery);

  useEffect(() => {
    setQuery(selectedQuery);
  }, [selectedQuery]);

  function handleQueryChange(value: string) {
    setQuery(value);
  }

  return (
    <>
      <SoqlInput soql={query} onChange={handleQueryChange} />
      <ParsedOutput query={query} />
    </>
  );
}
