/**
 * Project Card Template
 */

import { LitElement, html } from "lit-element";

class ProjectCardTemplate extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="project-card">
        <div class="project-img">
          <img src="../img/gallery/03_lungs.jpg" />
        </div>
        <div class="project-content">
          <h1>Title for the Card!</h1>
          <p>
            Rex Twedt was just an ordinary kid from Omaha, Nebraska.
          </p>
          <p>
            After graduating from Iowa State University with a degree in
            Biochemistry, he began working at Cargill as a lab technician.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define("project-card", ProjectCardTemplate);
