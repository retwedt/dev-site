/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import { initNavMenu, initNavMenuResizeListener } from "./js/menu";

import "./styles/main.styl";

const menuToggle = document.querySelector(".nav-toggle");
const collapsibleMenu = document.querySelector(".nav-collapse");

//*******************onload event*******************
// when window loads, setup events on buttons and browser
window.onload = () => {
  menuToggle.addEventListener("click", _ => {
    initNavMenu(collapsibleMenu);
  });

  window.addEventListener("resize", e => {
    const width = e.target.innerWidth;
    initNavMenuResizeListener(collapsibleMenu, width);
  });
};
