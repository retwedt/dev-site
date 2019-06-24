/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { PureComponent } from "react";

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="copyright">
        <div className="nav-wrap">
          Copyright &#169;
          <span id="copyright-year"> {new Date().getFullYear()} </span>
          Rex Twedt III
        </div>
      </footer>
    );
  }
}
