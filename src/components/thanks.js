/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Fragment, PureComponent } from "react";

export default class Thanks extends PureComponent {
  render() {
    return (
      <Fragment>
        <h1>Message Submitted!</h1>
        <p>Thanks for the message, I will contact you as soon as possible.</p>
        <a href="index.html">Return to Homepage.</a>
      </Fragment>
    );
  }
}
