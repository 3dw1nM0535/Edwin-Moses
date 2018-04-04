import React, { Component } from "react";
import { Grid, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ContactForm from "../forms/ContactForm";
import { sendMail } from "../../actions/actions";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: "",
      isSuccess: false,
    };
  }

  submit = data => this.props.sendMail(data)
    .then(message => this.setState({ flash: message, isSuccess: true }));

  render() {
    const { flash, isSuccess } = this.state;
    return (
      <Grid stackable centered className="padding">
        <Grid.Column width={7}>
          <Header as="h1">Contact Form</Header>
          {isSuccess && (
            <Message success>
              {flash}
            </Message>
            )}
          <ContactForm submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

ContactPage.propTypes = {
  sendMail: PropTypes.func.isRequired,
};

export default connect(null, { sendMail })(ContactPage);
