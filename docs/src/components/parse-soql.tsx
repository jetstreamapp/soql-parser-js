import { Button, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import * as React from 'react';
import * as CopyToClipboard from 'react-copy-to-clipboard';
import { parseQuery } from 'soql-parser-js';
import './parse-soql.css';

interface IParseSoqlProps {
  soql: string;
}

interface IParseSoqlState {
  isValid: boolean;
  parsedSoql: string;
  soql: string;
}

export class ParseSoql extends React.Component<IParseSoqlProps, IParseSoqlState> {
  constructor(props: IParseSoqlProps) {
    super(props);

    this.state = {
      isValid: true,
      parsedSoql: props.soql ? JSON.stringify(parseQuery(props.soql), null, 4) : '',
      soql: props.soql || '',
    };
  }

  public componentWillReceiveProps(nextProps: IParseSoqlProps) {
    this.parseQuery(nextProps.soql);
    this.setState({ soql: nextProps.soql });
  }

  public onChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ soql: (ev.target as HTMLInputElement).value });
    setTimeout(() => {
      this.setState({ isValid: this.isValid((ev.target as HTMLInputElement).value) });
    });
  };

  public isValid = (query: string) => {
    try {
      parseQuery(query);
      return true;
    } catch (ex) {
      return false;
    }
  };

  public getValidMessage = () => {
    if (!this.isValid(this.state.soql)) {
      return 'the query is invalid';
    } else {
      return '';
    }
  };

  public parseQuery = (query?: string) => {
    try {
      const parsedSoql = parseQuery(query || this.state.soql);
      this.setState({
        parsedSoql: JSON.stringify(parsedSoql, null, 4),
      });
    } catch (ex) {
      this.setState({
        parsedSoql: ex.message,
      });
    }
  };

  public onKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 13 && (ev.altKey || ev.metaKey)) {
      this.parseQuery();
    }
  };

  public render() {
    return (
      <div className="ms-Fabric" dir="ltr">
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <div>
                <TextField
                  label="SOQL Query"
                  multiline={true}
                  rows={12}
                  value={this.state.soql}
                  onChange={this.onChange}
                  onGetErrorMessage={this.getValidMessage}
                  validateOnLoad={false}
                  onKeyDown={this.onKeyDown}
                />
              </div>
              <div className="parse-row">
                <div className="">
                  <DefaultButton
                    primary={true}
                    text="Parse Query"
                    iconProps={{ iconName: 'LightningBolt' }}
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.parseQuery()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <TextField
                label="Parsed Output"
                multiline={true}
                rows={25}
                disabled={true}
                value={this.state.parsedSoql}
              />
              <div className="parse-row">
                {this.state.parsedSoql && (
                  <div className="">
                    <CopyToClipboard text={this.state.parsedSoql}>
                      <Button
                        primary={true}
                        disabled={!this.state.parsedSoql}
                        iconProps={{ iconName: 'copy' }}
                        title="Copy"
                        ariaLabel="Copy"
                        text="Copy to Clipboard"
                      />
                    </CopyToClipboard>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
