/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Component, Fragment } from "react";

export default class ProjectDetail extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <h1>Project Title</h1>
        <div className="project-detail-wrap">
          <div className="project-detail-img">
            <img src="../img/gallery/03_lungs.jpg" />
          </div>
          <div className="project-detail-content">
            <h1>Title for the Card!</h1>
            <p>Rex Twedt was just an ordinary kid from Omaha, Nebraska.</p>
            <p>
              After graduating from Iowa State University with a degree in
              Biochemistry, he began working at Cargill as a lab technician.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
