import { TextField } from 'office-ui-fabric-react/lib/TextField';
import * as React from 'react';
import { composeQuery, FormatOptions, isQueryValid, parseQuery, Query } from 'soql-parser-js';
import CodeOutput from './parse-soql-code-output';
import ParseSoqlFormat from './parse-soql-format';
import './parse-soql.css';

interface IParseSoqlProps {
  // soql: string;
}

interface IParseSoqlState {
  isValid: boolean;
  parsedSoql: string;
  composedQuery?: string;
  soql: string;
  format: boolean;
  formatOptions: FormatOptions;
  parseDuration: number;
}

export class ParseSoql extends React.Component<IParseSoqlProps, IParseSoqlState> {
  constructor(props: IParseSoqlProps) {
    super(props);

    // const start = performance.now();
    // const parsedSoql = props.soql ? parseQuery(props.soql, { allowApexBindVariables: true }) : undefined;
    // const end = performance.now();

    // const composedQuery = parsedSoql ? composeQuery(parsedSoql) : '';

    this.state = {
      isValid: true,
      parsedSoql: '', // JSON.stringify(parsedSoql || '', null, 4),
      // composedQuery,
      soql: '',
      format: true,
      formatOptions: {
        fieldMaxLineLength: 60,
        fieldSubqueryParensOnOwnLine: true,
        whereClauseOperatorsIndented: false,
      },
      parseDuration: 0, // parsedSoql ? end - start : -1,
    };
  }

  soqlQueryExternalChange(soql: string) {
    this.parseQuery(soql);
    this.setState({ soql });
  }

  public onChange = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const soql: string = (ev.target as HTMLInputElement).value;
    this.setState({ soql });
    this.parseQuery(soql);
    setTimeout(() => {
      this.setState({ isValid: this.isValid(soql) });
    });
  };

  public isValid = (query: string) => {
    return isQueryValid(query, { allowApexBindVariables: true });
  };

  public getValidMessage = () => {
    if (!this.isValid(this.state.soql)) {
      return 'the query is invalid';
    } else {
      return '';
    }
  };

  public parseQuery = (query?: string, format?: boolean, formatOptions?: FormatOptions) => {
    try {
      const start = performance.now();
      const parsedSoql: Query = parseQuery(query || this.state.soql, { allowApexBindVariables: true });
      const end = performance.now();

      const composedQuery: string = composeQuery(parsedSoql, {
        format: typeof format === 'boolean' ? format : this.state.format,
        formatOptions: formatOptions || this.state.formatOptions,
      });
      this.setState({
        parsedSoql: JSON.stringify(parsedSoql, null, 4),
        composedQuery,
        parseDuration: end - start,
      });
    } catch (ex) {
      this.setState({
        parsedSoql: ex.message,
        parseDuration: -1,
      });
    }
  };

  public onKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.keyCode === 13 && (ev.altKey || ev.metaKey)) {
      this.parseQuery();
    }
  };

  public toggleFormat = (enabled: boolean) => {
    this.setState({ format: enabled });
    this.parseQuery(this.state.soql, enabled, this.state.formatOptions);
  };

  public onFormatChange = (formatOptions: FormatOptions) => {
    this.setState({ formatOptions });
    this.parseQuery(this.state.soql, this.state.format, formatOptions);
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
                  rows={8}
                  value={this.state.soql}
                  onChange={this.onChange}
                  onGetErrorMessage={this.getValidMessage}
                  validateOnLoad={false}
                  onKeyDown={this.onKeyDown}
                />
              </div>
              {/* <div className="parse-row">
                <div className="">
                  <DefaultButton
                    primary={true}
                    text="Parse Query"
                    iconProps={{ iconName: 'LightningBolt' }}
                    onClick={() => this.parseQuery()}
                  />
                </div>
              </div> */}
            </div>
          </div>
          <CodeOutput
            title={
              <span>
                Parsed Query -
                <small style={{ marginLeft: 5 }}>
                  <code>parseQuery(soqlQuery, {`{allowApexBindVariables: true}`});</code>
                </small>
                {this.state.parseDuration > 0 && (
                  <div>
                    <small>Parsed in {this.state.parseDuration.toFixed(2)} milliseconds</small>
                  </div>
                )}
              </span>
            }
            lang="json"
            showCopyToClipboard={this.state.parsedSoql ? true : false}
            copyToClipboardDisabled={!this.state.parsedSoql}
            customStyle={{ maxHeight: 400, minHeight: 400, marginTop: 0, marginBottom: 5 }}
            data={this.state.parsedSoql}
          />
          {true && (
            <CodeOutput
              title={
                <span>
                  Composed Query -
                  <small style={{ marginLeft: 5 }}>
                    <code>composeQuery(parsedSoql, formatOptions);</code>
                  </small>
                </span>
              }
              lang="sql"
              showCopyToClipboard={true}
              copyToClipboardDisabled={!this.state.composedQuery}
              customStyle={{ marginTop: 0, marginBottom: 5 }}
              data={this.state.composedQuery}
              showChildrenAboveClipboard={true}
            >
              <ParseSoqlFormat
                style={{ margin: 5 }}
                formatOptions={this.state.formatOptions}
                enabled={this.state.format}
                toggleFormat={this.toggleFormat}
                onChange={this.onFormatChange}
              />
            </CodeOutput>
          )}
        </div>
      </div>
    );
  }
}
