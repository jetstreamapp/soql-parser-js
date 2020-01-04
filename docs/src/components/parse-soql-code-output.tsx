import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import { xonokai } from 'react-syntax-highlighter/styles/prism';

import * as React from 'react';
import { Button } from 'office-ui-fabric-react/lib/Button';

export interface CodeOutputProps {
  title: string | JSX.Element;
  lang: string;
  data?: string;
  showCopyToClipboard: boolean;
  copyToClipboardDisabled: boolean;
  showChildrenAboveClipboard?: boolean;
  customStyle?: any;
}

export default class CodeOutput extends React.Component<CodeOutputProps, any> {
  public render() {
    return (
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12">
          <div className="ms-font-l">{this.props.title}</div>
          <SyntaxHighlighter language={this.props.lang} style={xonokai} customStyle={this.props.customStyle}>
            {this.props.data}
          </SyntaxHighlighter>
          <div>
            {this.props.showChildrenAboveClipboard && this.props.children}
            {this.props.showCopyToClipboard && this.props.data && (
              <CopyToClipboard text={this.props.data}>
                <Button
                  primary={true}
                  disabled={this.props.copyToClipboardDisabled}
                  iconProps={{ iconName: 'copy' }}
                  title="Copy"
                  ariaLabel="Copy"
                  text="Copy to Clipboard"
                />
              </CopyToClipboard>
            )}
            {!this.props.showChildrenAboveClipboard && this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
