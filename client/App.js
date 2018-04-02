import React from "react";
import { withRouter, Route } from "react-router-dom";

import HomePage from "./component/pages/HomePage";
import ProjectsPage from "./component/pages/ProjectsPage";
import BlogPage from "./component/pages/BlogPage";
import ContactPage from "./component/pages/ContactPage";
import SkillsPage from "./component/pages/SkillsPage";
import ProjectsListPage from "./component/pages/ProjectsListPage";

import NavBar from "./component/navigation/NavBar";

const App = () => (
  <div className="ui container">
    <NavBar />
    <Route path="/" exact component={HomePage} />
    <Route path="/projects" exact component={ProjectsPage} />
    <Route path="/projects/:title" exact component={ProjectsListPage} />
    <Route path="/contact" exact component={ContactPage} />
    <Route path="/blog" exact component={BlogPage} />
    <Route path="/skills" exact component={SkillsPage} />
  </div>
);

export default withRouter(App);
