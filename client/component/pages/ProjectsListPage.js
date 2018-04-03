import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import { fetchProjects } from "../../actions/actions";
import ProjectCard from "../views/ProjectItemView";

class ProjectsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => this.props.fetchProjects(this.props.match.params.title);

  render() {
    const { projects } = this.props;

    return (
      <Grid container stackable centered>
        <ProjectCard projects={projects} />
      </Grid>
    );
  }
}

ProjectsListPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  fetchProjects: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsListPage);
