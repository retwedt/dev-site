/*
 * AJAX
 * Copyright Rex Twedt 2019
 */

import axios from "axios";

// TODO(rex): Improve this...
const contentEl = document.querySelector(".content-wrap");

/**
 * Check if browser supports history api
 */
function supports_history_api() {
  if (!window.history || !window.history.pushState) {
    console.log("history api not supported!");
    return false;
  }
  return true;
}

/**
 * AJAX call to load page content.
 * @param {*} url
 */
function loadPage(url) {
  if (!url) return;

  //send request
  axios
    .get(url)
    .then(response => {
      // TODO(rex): Improve this...
      console.log(response);
      contentEl.innerHTML = response.data;
    })
    .catch(err => {
      console.error(err.response);
    });
}

/**
 * Get hash from current url, construct content url for ajax
 */
function parseURL() {
  //if there is no hash (you are trying to go to the homepage)
  let newHash = window.location.hash || "#home";
  newHash = newHash.slice(1);
  return `content/${newHash}.html`;
}

export { supports_history_api, loadPage, parseURL };
