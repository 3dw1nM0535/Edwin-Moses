import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchProjects } from "../../actions/actions";

class ProjectsListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => this.props.fetchProjects(this.props.match.params.title);

  render() {
    return (
      <div>Edwin</div>
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
};

export default connect(null, { fetchProjects })(ProjectsListPage);
