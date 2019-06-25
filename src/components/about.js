/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Fragment, PureComponent } from "react";

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <h1>About Me</h1>
        <div className="about-img-wrap">
          <div className="about-img-bg">
            <img
              src="img/pic_bio.jpg"
              id="aboutImg"
              alt="Picture of Rex Twedt III"
            />
          </div>
        </div>
        <div className="bio-wrap">
          <p>
            Rex Twedt was just an ordinary kid from Omaha, Nebraska. After
            graduating from Iowa State University with a degree in Biochemistry,
            he began working at Cargill as a lab technician.
          </p>
          <p>
            Then, one day... he quit his job at the lab and returned to school.
            Now, he is a <em>Medical Illustrator</em>! He spends his days
            creating medical illustrations, using his powers to help the world.
            When he isn't studying, Rex enjoys reading, playing guitar, and
            meandering through the museums of Chicago.
          </p>
        </div>
      </Fragment>
    );
  }
}