import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { FormatOptions } from 'soql-parser-js';

export interface ParseSoqlFormatProps {
  style?: any;
  formatOptions: FormatOptions;
  enabled: boolean;
  toggleFormat: (enabled: boolean) => void;
  onChange: (formatOptions: FormatOptions) => void;
}

export default class ParseSoqlFormat extends React.Component<ParseSoqlFormatProps, any> {
  public setMaxFieldLen = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const formatOptions = {
      ...this.props.formatOptions,
      fieldMaxLineLen: Math.max(0, Number((ev.target as HTMLInputElement).value)),
    };
    this.props.onChange(formatOptions);
  };

  public toggleSubqueryParens = () => {
    const formatOptions = {
      ...this.props.formatOptions,
      fieldSubqueryParensOnOwnLine: !this.props.formatOptions.fieldSubqueryParensOnOwnLine,
    };
    this.props.onChange(formatOptions);
  };

  public toggleWhereClauseIndent = () => {
    const formatOptions = {
      ...this.props.formatOptions,
      whereClauseOperatorsIndented: !this.props.formatOptions.whereClauseOperatorsIndented,
    };
    this.props.onChange(formatOptions);
  };

  public render() {
    return (
      <div style={this.props.style}>
        <Checkbox
          label="Format Output"
          checked={this.props.enabled}
          onChange={() => this.props.toggleFormat(!this.props.enabled)}
        />
        <div style={{ margin: 5, paddingLeft: 10 }}>
          <div style={{ maxWidth: 400 }}>
            <TextField
              label={
                (
                  <span>
                    Number of characters before fields wrap -{' '}
                    <small>
                      <code>fieldMaxLineLen</code>
                    </small>
                  </span>
                ) as any
              }
              type="number"
              value={String(this.props.formatOptions.fieldMaxLineLen)}
              onChange={this.setMaxFieldLen}
              disabled={!this.props.enabled}
            />
          </div>
          <div style={{ marginTop: 5 }}>
            <Checkbox
              label={
                (
                  <span>
                    Subquery Parenthesis on own line -{' '}
                    <small>
                      <code>fieldSubqueryParensOnOwnLine</code>
                    </small>
                  </span>
                ) as any
              }
              checked={this.props.formatOptions.fieldSubqueryParensOnOwnLine}
              onChange={this.toggleSubqueryParens}
              disabled={!this.props.enabled}
            />
          </div>
          <div style={{ marginTop: 5 }}>
            <Checkbox
              label={
                (
                  <span>
                    Indent items in WHERE clause -{' '}
                    <small>
                      <code>whereClauseOperatorsIndented</code>
                    </small>
                  </span>
                ) as any
              }
              checked={this.props.formatOptions.whereClauseOperatorsIndented}
              onChange={this.toggleWhereClauseIndent}
              disabled={!this.props.enabled}
            />
          </div>
        </div>
      </div>
    );
  }
}
