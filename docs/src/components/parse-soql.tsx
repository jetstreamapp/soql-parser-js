import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import * as React from 'react';
import { parseQuery, Query, composeQuery, isQueryValid, FormatOptions } from 'soql-parser-js';

import './parse-soql.css';
import ParseSoqlFormat from './parse-soql-format';
import CodeOutput from './parse-soql-code-output';

interface IParseSoqlProps {
  soql: string;
}

interface IParseSoqlState {
  isValid: boolean;
  parsedSoql: string;
  composedQuery?: string;
  soql: string;
  format: boolean;
  formatOptions: FormatOptions;
}

export class ParseSoql extends React.Component<IParseSoqlProps, IParseSoqlState> {
  constructor(props: IParseSoqlProps) {
    super(props);

    const parsedSoql = props.soql ? parseQuery(props.soql) : undefined;
    const composedQuery = parsedSoql ? composeQuery(parsedSoql) : '';

    this.state = {
      isValid: true,
      parsedSoql: JSON.stringify(parsedSoql || '', null, 4),
      composedQuery,
      soql: props.soql || '',
      format: true,
      formatOptions: {
        fieldMaxLineLength: 60,
        fieldSubqueryParensOnOwnLine: true,
        whereClauseOperatorsIndented: false,
      },
    };
  }

  public componentWillReceiveProps(nextProps: IParseSoqlProps) {
    this.parseQuery(nextProps.soql);
    this.setState({ soql: nextProps.soql });
  }

  public onChange = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({ soql: (ev.target as HTMLInputElement).value });
    setTimeout(() => {
      this.setState({ isValid: this.isValid((ev.target as HTMLInputElement).value) });
    });
  };

  public isValid = (query: string) => {
    return isQueryValid(query);
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
      const parsedSoql: Query = parseQuery(query || this.state.soql);
      const composedQuery: string = composeQuery(parsedSoql, {
        format: typeof format === 'boolean' ? format : this.state.format,
        formatOptions: formatOptions || this.state.formatOptions,
      });
      this.setState({
        parsedSoql: JSON.stringify(parsedSoql, null, 4),
        composedQuery,
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
              <div className="parse-row">
                <div className="">
                  <DefaultButton
                    primary={true}
                    text="Parse Query"
                    iconProps={{ iconName: 'LightningBolt' }}
                    onClick={() => this.parseQuery()}
                  />
                </div>
              </div>
            </div>
          </div>
          <CodeOutput
            title={
              <span>
                Parsed Query -
                <small style={{ marginLeft: 5 }}>
                  <code>parseQuery(soqlQuery);</code>
                </small>
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
