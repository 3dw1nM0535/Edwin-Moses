import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import ContactForm from "../forms/ContactForm";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = data => console.log(data);

  render() {
    return (
      <Grid stackable centered className="padding">
        <Grid.Column width={7}>
          <Header as="h1">Contact Form</Header>
          <ContactForm submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default ContactPage;
