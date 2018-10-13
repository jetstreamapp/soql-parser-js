import * as React from 'react';
import './navbar.css';
import * as ghImage from '../images/GitHub-Mark-Light-32px.png';

export function Navbar(props: any) {
  return (
    <div className="NavBar">
      <div className="logo ms-font-xl">
        <strong>SOQL Parser JS</strong>
      </div>
      <div className="logos">
        <a href="https://github.com/paustint/soql-parser-js" target="_blank">
          <img src={ghImage} />
        </a>
      </div>
    </div>
  );
}
