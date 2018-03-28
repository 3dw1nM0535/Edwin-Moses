import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid centered columns={1}>
        <Header as="h1">Home page</Header>
      </Grid>
    );
  }
}
export default HomePage;
