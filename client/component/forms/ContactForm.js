import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import isEmail from "validator/lib/isEmail";

import InlineError from "../messages/InlineError";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        subject: "",
        emailBody: "",
      },
      errors: {},
      loading: false,
    };
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).then(() => this.setState({ loading: false }))
        .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
    }
  }

  validate = (data) => {
    const errors = {};

    if (!data.email) errors.email = "Can't be Blank";
    if (!isEmail(data.email)) errors.email = "Invalid Email address";
    if (!data.subject) errors.subject = "Can't be Blank";
    if (!data.emailBody) errors.emailBody = "Can't be Blank";

    return errors;
  }

  render() {
    const { data, loading, errors } = this.state;

    return (
      <Form loading={loading} onSubmit={this.onSubmit} size="small">
        <Form.Field error={errors.email}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            onChange={this.onChange}
            value={data.email}
          />
          { errors.email && <InlineError text={errors.email} /> }
        </Form.Field>
        <Form.Field error={errors.subject}>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject of Email"
            onChange={this.onChange}
            value={data.subject}
          />
          { errors.subject && <InlineError text={errors.subject} /> }
          </Form.Field>
          <Form.Field error={errors.emailBody}>
            <textarea onChange={this.onChange} placeholder="Enter email body" value={data.emailBody} name="emailBody"></textarea>
            { errors.emailBody && <InlineError text={errors.emailBody} /> }
          </Form.Field>
          <Button color="black" content="Send" />
      </Form>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ContactForm;
