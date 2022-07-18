import ComposeQueries from '@site/src/components/ComposeQueries';
import ParseQueries from '@site/src/components/ParseQueries';
import SoqlList from '@site/src/components/SoqlList';
import Tabs from '@site/src/components/Tabs';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useState } from 'react';
import Utilities from '../components/Utilities';

export default function Playground() {
  const [query, setQuery] = useState<string>('SELECT Id, Name, BillingCity FROM Account');
  const [selectedQuery, setSelectedQuery] = useState<string>('SELECT Id, Name, BillingCity FROM Account');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function handleSelection(query: string) {
    setSelectedQuery(query);
    setQuery(query);
  }

  function handledToggleSidebarOpen() {
    setSidebarOpen(!sidebarOpen);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
  }

  return (
    <Layout title="Hello" description="Hello React Page" noFooter>
      <div className="container">
        <Tabs
          tabs={[
            {
              id: 'parse',
              label: 'Parse Queries',
              content: (
                <div className="row row--no-gutters">
                  <div className={clsx({ col: sidebarOpen })}>
                    <SoqlList
                      isOpen={sidebarOpen}
                      selected={selectedQuery}
                      onSelected={handleSelection}
                      onToggleOpen={handledToggleSidebarOpen}
                    />
                  </div>
                  <div className="col" style={{ overflow: 'hidden' }}>
                    <ParseQueries selectedQuery={selectedQuery} />
                  </div>
                </div>
              ),
            },
            {
              id: 'compose',
              label: 'Compose Queries',
              content: (
                <div className="row row--no-gutters">
                  <div className={clsx({ col: sidebarOpen })}>
                    <SoqlList
                      isOpen={sidebarOpen}
                      selected={selectedQuery}
                      onSelected={handleSelection}
                      onToggleOpen={handledToggleSidebarOpen}
                    />
                  </div>
                  <div className="col" style={{ overflow: 'hidden' }}>
                    <ComposeQueries selectedQuery={selectedQuery} />
                  </div>
                </div>
              ),
            },
            {
              id: 'utilities',
              label: 'Utility Functions',
              content: (
                <div className="row row--no-gutters">
                  {/* <div className={clsx({ col: sidebarOpen })}>
                    <SoqlList
                      isOpen={sidebarOpen}
                      selected={selectedQuery}
                      onSelected={handleSelection}
                      onToggleOpen={handledToggleSidebarOpen}
                    />
                  </div> */}
                  <div className="col" style={{ overflow: 'hidden' }}>
                    <Utilities />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </Layout>
  );
}
