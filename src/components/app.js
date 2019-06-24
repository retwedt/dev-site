/*
 * www.rextwedt.com
 * A Portfolio Site!
 * Copyright Rex Twedt 2019
 */

import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Scrollbar } from "react-scrollbars-custom";
// import { Scrollbars } from "react-custom-scrollbars";

import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Gallery from "./gallery";
import Home from "./home";
import ProjectDetail from "./project-detail";
import ProjectsList from "./projects-list";
import NavBar from "./nav-bar";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <section className="main-content">
          <Route
            render={({ location }) => {
              console.log(location);
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={320}
                    unmountOnExit
                  >
                    <div className="content-wrap">
                      <Switch location={location}>
                        <Route path="/" exact component={Home} />
                        <Route
                          path="/projects"
                          exact
                          component={ProjectsList}
                        />
                        <Route
                          path="/project/:id"
                          exact
                          component={ProjectDetail}
                        />
                        <Route path="/gallery" exact component={Gallery} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </section>
        <Footer />
      </Fragment>
    );
  }
}
