/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Fragment, PureComponent } from "react";

export default class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <p>
          Welcome to <span id="home-link">rextwedt.com</span>. I'm glad you're
          here!
        </p>
        <p>
          Please enjoy the launch of my completely redesigned website! I will be
          continuing to update this site, so keep coming back!
        </p>
        <div className="home-img-bg">
          <img src="img/pic_home.jpg" id="homeImg" alt="Home image" />
        </div>
      </Fragment>
    );
  }
}
