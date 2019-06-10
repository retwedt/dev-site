/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import { toggleNavMenu, initNavMenuResizeListener } from "./js/menu";

import "./styles/main.styl";

const menuToggleEl = document.querySelector(".nav-toggle");
const collapsibleMenuEl = document.querySelector(".nav-collapse");
const copyrightYearEl = document.querySelector("#copyright-year");

// When window loads, setup events on buttons and browser
window.onload = () => {
  // Setup the Mobile Nav Menu toggle.
  menuToggleEl.addEventListener("click", _ => {
    toggleNavMenu(collapsibleMenuEl);
  });

  // Setup the window resize listener for the Nav Menu.
  window.addEventListener("resize", e => {
    const width = e.target.innerWidth;
    initNavMenuResizeListener(collapsibleMenuEl, width);
  });

  // Set the copyright date to the current year.
  const currentYear = new Date().getFullYear();
  copyrightYearEl.textContent = currentYear;
};
