import * as React from 'react';
import './navbar.css';
import * as ghImage from '../images/GitHub-Mark-Light-32px.png';
import { ReactComponent as Logo } from '../images/soql-parser-js-logo.svg';

export function Navbar(props: any) {
  return (
    <div className="NavBar">
      <div style={{ width: 350, paddingTop: 5 }}>
        <Logo style={{ backgroundColor: '#fff' }} />
      </div>
      <div className="logos">
        <a href="https://github.com/paustint/soql-parser-js" target="_blank" rel="noopener noreferrer">
          <img src={ghImage.default} alt="github logo" />
        </a>
      </div>
    </div>
  );
}
