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
 * Async AJAX call to load page content.
 * @param {String} url
 */
async function loadPage(url) {
  if (!url) return false;

  //send request
  try {
    const response = await axios.get(url);
    contentEl.innerHTML = response.data;
  } catch (err) {
    console.error(err.response);
    return false;
  }

  return true;
}

/**
 * Get hash from current url, construct content url for ajax
 */
function parseURL() {
  //if there is no hash (you are trying to go to the homepage)
  let newHash = window.location.hash || "#home";
  newHash = newHash.slice(1);
  return `html/${newHash}.html`;
}

export { supports_history_api, loadPage, parseURL };
