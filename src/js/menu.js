/*
 * Dropdown menu
 * Copyright Rex Twedt 2019
 */

import * as raf from "raf";

/**
 *
 * @param {*} el
 */
function collapseSection(el) {
  const sectionHeight = el.scrollHeight;

  const elTransition = el.style.transition;
  el.style.transition = "";

  raf(() => {
    el.style.height = `${sectionHeight}px`;
    el.style.transition = elTransition;

    raf(() => {
      el.style.height = `${0}px`;
    });
  });

  el.setAttribute("data-collapsed", "true");
}

/**
 *
 * @param {*} el
 */
function expandSelection(el) {
  const sectionHeight = el.scrollHeight;

  el.style.height = `${sectionHeight}px`;

  el.addEventListener("transitionend", function transitionEndCallback() {
    el.removeEventListener("transitionend", transitionEndCallback);

    el.style.height = null;
  });

  el.setAttribute("data-collapsed", "false");
}

/**
 *
 * @param {*} menuEl
 */
function initNavMenu(menuEl) {
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

export { initNavMenu, initNavMenuResizeListener };
