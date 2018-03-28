import React from "react";
import { withRouter, Route } from "react-router-dom";

import HomePage from "./component/pages/HomePage";
import ProjectsPage from "./component/pages/ProjectsPage";
import BlogPage from "./component/pages/BlogPage";
import ContactPage from "./component/pages/ContactPage";

import NavBar from "./component/navigation/NavBar";

const App = () => (
  <div className="ui container">
    <NavBar />
    <Route path="/" exact component={HomePage} />
    <Route path="/projects" exact component={ProjectsPage} />
    <Route path="/contact" exact component={ContactPage} />
    <Route path="/blog" exact component={BlogPage} />
  </div>
);

export default withRouter(App);
