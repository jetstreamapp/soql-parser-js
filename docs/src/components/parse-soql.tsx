import { Button, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import * as React from 'react';
import * as CopyToClipboard from 'react-copy-to-clipboard';
import { parseQuery, Query, composeQuery, isQueryValid, FormatOptions } from 'soql-parser-js';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';

import './parse-soql.css';

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
        fieldMaxLineLen: 60,
        fieldSubqueryParensOnOwnLine: true,
        whereClauseOperatorsIndented: false,
      },
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
      format = typeof format === 'boolean' ? format : this.state.format;
      const parsedSoql: Query = parseQuery(query || this.state.soql);
      const composedQuery: string = composeQuery(parsedSoql, { format, formatOptions });
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

  public toggleFormat = () => {
    this.setState({ format: !this.state.format });
    this.parseQuery(this.state.soql, !this.state.format, this.state.formatOptions);
  };

  public toggleSubqueryParens = () => {
    const formatOptions = {
      ...this.state.formatOptions,
      fieldSubqueryParensOnOwnLine: !this.state.formatOptions.fieldSubqueryParensOnOwnLine,
    };
    this.setState({ formatOptions });
    this.parseQuery(this.state.soql, this.state.format, formatOptions);
  };

  public toggleWhereClauseIndent = () => {
    const formatOptions = {
      ...this.state.formatOptions,
      whereClauseOperatorsIndented: !this.state.formatOptions.whereClauseOperatorsIndented,
    };
    this.setState({ formatOptions });
    this.parseQuery(this.state.soql, this.state.format, formatOptions);
  };

  public setMaxFieldLen = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const formatOptions = {
      ...this.state.formatOptions,
      fieldMaxLineLen: Math.max(0, Number((ev.target as HTMLInputElement).value)),
    };
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
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick={() => this.parseQuery()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <div className="ms-font-l">Parsed Query</div>
              <SyntaxHighlighter
                language="json"
                style={xonokai}
                customStyle={{ maxHeight: 400, minHeight: 400, marginTop: 0, marginBottom: 5 }}
              >
                {this.state.parsedSoql}
              </SyntaxHighlighter>
              <div>
                {this.state.parsedSoql && (
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
                )}
              </div>
            </div>
          </div>
          {this.state.composedQuery && (
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12">
                <div className="ms-font-l">
                  Composed Query <span className="ms-font-s">(Parsed query converted back to SOQL)</span>
                </div>
                <SyntaxHighlighter language="sql" style={xonokai} customStyle={{ marginTop: 0, marginBottom: 5 }}>
                  {this.state.composedQuery}
                </SyntaxHighlighter>
                <div style={{ margin: 5 }}>
                  <Checkbox label="Format Output" checked={this.state.format} onChange={this.toggleFormat} />
                  <div style={{ margin: 5, paddingLeft: 10 }}>
                    <div style={{ maxWidth: 250 }}>
                      <TextField
                        label="Number of characters before fields wrap"
                        type="number"
                        value={String(this.state.formatOptions.fieldMaxLineLen)}
                        onChange={this.setMaxFieldLen}
                        disabled={!this.state.format}
                      />
                    </div>
                    <div style={{ marginTop: 5 }}>
                      <Checkbox
                        label="Subquery Parenthesis on own line"
                        checked={this.state.formatOptions.fieldSubqueryParensOnOwnLine}
                        onChange={this.toggleSubqueryParens}
                        disabled={!this.state.format}
                      />
                    </div>
                    <div style={{ marginTop: 5 }}>
                      <Checkbox
                        label="Indent items in WHERE clause"
                        checked={this.state.formatOptions.whereClauseOperatorsIndented}
                        onChange={this.toggleWhereClauseIndent}
                        disabled={!this.state.format}
                      />
                    </div>
                  </div>
                </div>
                <CopyToClipboard text={this.state.composedQuery}>
                  <Button
                    primary={true}
                    disabled={!this.state.composedQuery}
                    iconProps={{ iconName: 'copy' }}
                    title="Copy"
                    ariaLabel="Copy"
                    text="Copy to Clipboard"
                  />
                </CopyToClipboard>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
