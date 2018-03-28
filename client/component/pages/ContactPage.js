import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid centered columns={1}>
        <Header as="h2">Contact page</Header>
      </Grid>
    );
  }
}

export default ContactPage;
