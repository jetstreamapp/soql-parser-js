import * as React from 'react';
import { initializeIcons } from '@uifabric/icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './App.css';
import { ParseSoql } from './components/parse-soql';
import { Navbar } from './components/navbar';
import SampleQueries from './components/sample-queries';

initializeIcons();

interface IAppstate {
  soql: string;
}

class App extends React.Component<any, IAppstate> {
  constructor(props: any) {
    super(props);
    this.state = {
      soql: 'SELECT Id, Name FROM Account',
    };
  }
  public onQuerySelected = (soql: string) => {
    this.setState({ soql });
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
              <ParseSoql soql={this.state.soql} />
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
