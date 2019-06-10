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
  if (docWidth > 600) {
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
