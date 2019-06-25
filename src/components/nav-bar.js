/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";

/*
 * Dropdown menu
 * Adapted from Css-Tricks
 *  https://css-tricks.com/using-css-transitions-auto-dimensions/
 * Copyright Rex Twedt 2019
 */

import * as raf from "raf";

/**
 *
 * @param {*} menuEl
 */
function collapseSection(menuEl) {
  const sectionHeight = menuEl.scrollHeight;

  const menuElTransition = menuEl.style.transition;
  menuEl.style.transition = "";

  raf(() => {
    menuEl.style.height = `${sectionHeight}px`;
    menuEl.style.transition = menuElTransition;

    raf(() => {
      menuEl.style.height = `${0}px`;
    });
  });

  menuEl.setAttribute("data-collapsed", "true");
}

/**
 *
 * @param {*} menuEl
 */
function expandSelection(menuEl) {
  const sectionHeight = menuEl.scrollHeight;

  menuEl.style.height = `${sectionHeight}px`;

  menuEl.addEventListener("transitionend", function transitionEndCallback() {
    menuEl.removeEventListener("transitionend", transitionEndCallback);

    menuEl.style.height = null;
  });

  menuEl.setAttribute("data-collapsed", "false");
}

/**
 *
 * @param {*} menuEl
 */
function toggleNavMenu(menuEl) {
  const isCollapsed = menuEl.getAttribute("data-collapsed") === "true";

  if (isCollapsed) {
    expandSelection(menuEl);
  } else {
    collapseSection(menuEl);
  }
}

/**
 *
 * @param {*} menuEl
 * @param {*} docWidth
 */
function initNavMenuResizeListener(menuEl, docWidth) {
  if (docWidth >= 584) {
    menuEl.style.height = null;
  } else {
    const isCollapsed = menuEl.getAttribute("data-collapsed") === "true";

    if (isCollapsed) {
      menuEl.style.height = `${0}px`;
    } else {
      const sectionHeight = menuEl.scrollHeight;
      menuEl.style.height = `${sectionHeight}px`;
    }
  }
}

export { toggleNavMenu, initNavMenuResizeListener };

export default class NavBar extends Component {
  constructor() {
    super();
    this.resizeNav = this.resizeNav.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillMount() {
    window.addEventListener("resize", this.resizeNav);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeNav);
  }

  resizeNav(e) {
    const collapsibleMenuEl = document.querySelector(".nav-collapse");
    const width = e.target.innerWidth;
    initNavMenuResizeListener(collapsibleMenuEl, width);
  }

  toggleMenu(e) {
    const collapsibleMenuEl = document.querySelector(".nav-collapse");
    toggleNavMenu(collapsibleMenuEl);
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-wrap">
          <div className="nav-header">
            <div className="nav-logo">
              <img src="./img/nav-logo.png" alt="logo" />
              <div id="nav-title">
                <h1>Rex Twedt</h1>
                <h2>Medical Illustration</h2>
              </div>
            </div>
            <button
              type="button"
              className="nav-toggle closed"
              onClick={this.toggleMenu}
            >
              <span className="screen-reader">Toggle navigation</span>
              <div className="bars" />
              <div className="bars" />
              <div className="bars" />
            </button>
          </div>
          <div className="nav-collapse" data-collapsed="true">
            <Link to="/projects" className="nav-menu-item" id="projects-link">
              Projects
            </Link>
            <Link to="/gallery" className="nav-menu-item" id="gallery-link">
              Gallery
            </Link>
            <Link to="/about" className="nav-menu-item" id="about-link">
              About
            </Link>
            <Link to="/contact" className="nav-menu-item" id="contact-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
