/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Component, Fragment } from "react";
import ProjectCard from "./project-card";

export default class ProjectsList extends Component {
  constructor() {
    super();

    this.state = {
      projectList: [
        {
          id: 0,
          title: "Title for the Card!",
          summary:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 1,
          title: "Title for the Card!",
          summary:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 2,
          title: "Title for the Card!",
          summary:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 3,
          title: "Title for the Card!",
          summary:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        }
      ]
    };

    this.viewProject = this.viewProject.bind(this);
  }

  viewProject(e, project) {
    console.log(`Let's check out Project ${project.title}`);
    console.log(this.props.history);
    this.props.history.push(`/project/${project.id}`);
  }

  render() {
    return (
      <Fragment>
        <h1>Projects</h1>
        <div className="project-filters">
          <div className="filter">Animation</div>
          <div className="filter">Interactive</div>
          <div className="filter">Illustration</div>
          <div className="filter">Teaching</div>
        </div>
        <div className="projects-wrap">
          {this.state.projectList.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={this.viewProject}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}
