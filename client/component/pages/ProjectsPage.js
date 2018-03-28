import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid centered columns={1}>
        <Header as="h2">Projects page</Header>
      </Grid>
    );
  }
}

export default ProjectsPage;
