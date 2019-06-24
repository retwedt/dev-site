/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Component, Fragment } from "react";

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      galleryList: [
        {
          id: 0,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 1,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 2,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 3,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <h1>Images</h1>
        <div className="gallery-wrap">
          {this.state.galleryList.map(galleryItem => (
            <div key={galleryItem.id} className="gallery-img-wrap">
              <a
                href={galleryItem.img}
                className="gallery-img"
                rel="group1"
                title={galleryItem.title}
              >
                <img src={galleryItem.img} alt={galleryItem.imgAlt} />
              </a>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
