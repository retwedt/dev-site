/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Component } from "react";

export default class ProjectCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { onClick, project } = this.props;
    return (
      <div
        className="project-card"
        onClick={e => {
          onClick(e, project);
        }}
      >
        <div
          className="project-img"
          style={{ backgroundImage: `url(${project.img})` }}
        />
        <div className="project-content">
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
      </div>
    );
  }
}
