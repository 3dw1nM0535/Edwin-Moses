import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import countdownTimer from "../../utils/countDownTimer";

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    countdownTimer();
    return (
      <Grid centered>
        <Header className="coming-soon" as="h1" size="huge">Coming Soon</Header>
        <Grid.Row>
          <Header id="countdown" as="h1"></Header>
        </Grid.Row>
      </Grid>
    );
  }
}

export default BlogPage;
