/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import { toggleNavMenu, initNavMenuResizeListener } from "./js/menu";
import { supports_history_api, loadPage, parseURL } from "./js/ajax";

import "./js/project-card";

import "./views/projects.pug";
import "./styles/main.styl";

const menuToggleEl = document.querySelector(".nav-toggle");
const collapsibleMenuEl = document.querySelector(".nav-collapse");
const copyrightYearEl = document.querySelector("#copyright-year");
// TODO(rex): Improve this...
const contentEl = document.querySelector(".content-wrap");

// When window loads, setup events on buttons and browser
window.onload = () => {
  if (supports_history_api()) {
    // Parse url and load page
    const url = parseURL();
    loadPage(url);

    // Add click events to all buttons in the nav-wrapper
    const navButtons = collapsibleMenuEl.querySelectorAll("a");
    navButtons.forEach(element => {
      element.addEventListener(
        "click",
        e => {
          //prevent default action of button
          e.preventDefault();

          //check for href of element that was clicked on
          let pushURL = element.href;
          const index = pushURL.indexOf("#");

          //if there is no href, the user is trying to go home
          if (index < 0) pushURL = "home";
          else pushURL = pushURL.slice(index + 1);

          contentEl.addEventListener(
            "transitionend",
            async function transitionEndCallback() {
              contentEl.removeEventListener(
                "transitionend",
                transitionEndCallback
              );

              // Load the page and add it to the history.
              await loadPage(`html/${pushURL}.html`);

              contentEl.classList.remove("fade-out");
            }
          );

          contentEl.classList.add("fade-out");

          // update history.
          window.history.pushState(
            " ",
            null,
            `${window.location.origin}/#${pushURL}`
          );
        },
        true
      );
    });

    window.addEventListener(
      "popstate",
      _ => {
        // TODO(rex): Handle the transition.
        const url = parseURL();
        loadPage(url);
      },
      false
    );
  }

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
