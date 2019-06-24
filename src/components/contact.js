/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Fragment, PureComponent } from "react";

export default class Contact extends PureComponent {
  render() {
    return (
      <Fragment>
        <h1>Contact</h1>
        <p>
          Use this contact form to get in touch with Rex, for professional work
          or just to say hi!
        </p>
        <form
          action="//formspree.io/rex@rextwedt.com"
          method="POST"
          data-toggle="validator"
          role="form"
        >
          <label htmlFor="name">
            <div className="form-label">Name:</div>
            <input type="text" name="name" id="name" required />
          </label>
          <label htmlFor="email">
            <div className="form-label">Email:</div>
            <input type="email" name="email" id="email" required />
          </label>
          <label htmlFor="message">
            <div className="form-label">Message:</div>
            <textarea name="message" id="message" data-minlength="5" required />
          </label>
          <input type="submit" value="Send" id="submit" />
          <input type="hidden" name="_next" value="/#thanks" />
        </form>
        <div className="professional-links">
          <h2>Connect</h2>
          <a
            href="http://retwedt.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Blog{" "}
          </a>{" "}
          |
          <a
            href="https://www.youtube.com/user/retwedt/feed"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          |
          <a
            href="https://github.com/retwedt?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          |
          <a
            href="http://www.linkedin.com/in/retwedt"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn{" "}
          </a>{" "}
          |
          <a href="img/resume_design_v2.pdf" target="_blank" alt="resume">
            R&eacute;sum&eacute;
          </a>
          |<a href="mailto:rex@rextwedt.com">rex@rextwedt.com</a>
        </div>
      </Fragment>
    );
  }
}
