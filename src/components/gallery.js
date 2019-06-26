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
      animationList: [
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
        },
        {
          id: 4,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 5,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 6,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 7,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        }
      ],
      stillImageList: [
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
        },
        {
          id: 4,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 5,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 6,
          title: "Title for the Card!",
          imgAlt:
            "Rex Twedt was just an ordinary kid from Omaha, Nebraska.\nAfter graduating from Iowa State University with a degree in Biochemistry, he began working at Cargill as a lab technician.",
          img: "../img/gallery/03_lungs.jpg"
        },
        {
          id: 7,
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
          <h2>Animation</h2>
          {this.state.animationList.map(galleryItem => (
            <div key={galleryItem.id} className="gallery-img-wrap">
              <a
                href={galleryItem.img}
                className="gallery-img-link"
                title={galleryItem.title}
              >
                <div
                  className="gallery-img"
                  style={{ backgroundImage: `url(${galleryItem.img})` }}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="gallery-wrap">
          <h2>Images</h2>
          {this.state.stillImageList.map(galleryItem => (
            <div key={galleryItem.id} className="gallery-img-wrap">
              <a
                href={galleryItem.img}
                className="gallery-img-link"
                title={galleryItem.title}
              >
                <div
                  className="gallery-img"
                  style={{ backgroundImage: `url(${galleryItem.img})` }}
                />
              </a>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
