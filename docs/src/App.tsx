import * as React from 'react';
import { initializeIcons } from '@uifabric/icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './App.css';
import { ParseSoql } from './components/parse-soql';
import { Navbar } from './components/navbar';
import SampleQueries from './components/sample-queries';

initializeIcons();

class App extends React.Component<any, any> {
  parseSoqlRef: React.RefObject<ParseSoql>;

  constructor(props: any) {
    super(props);

    this.parseSoqlRef = React.createRef<ParseSoql>();

    this.state = {
      soql: 'SELECT Id, Name FROM Account',
    };
  }

  public onQuerySelected = (soql: string) => {
    if (this.parseSoqlRef.current) {
      this.parseSoqlRef.current.soqlQueryExternalChange(soql);
    }
  };

  public render() {
    return (
      <Fabric className="App">
        <div className="header">
          <Navbar />
        </div>

        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm6">
              <ParseSoql ref={this.parseSoqlRef} />
            </div>
            <div className="ms-Grid-col ms-sm6 queries-col">
              <SampleQueries onQuerySelected={this.onQuerySelected} />
            </div>
          </div>
        </div>
      </Fabric>
    );
  }
}

export default App;
