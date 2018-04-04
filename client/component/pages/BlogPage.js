import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  tick = () => {
    // get count down date
    const countDownDate = new Date("May 19, 2018 15:37:25").getTime();
    // get curent down
    const now = new Date().getTime();
    // calculate distance between count down date and current date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display result in div element
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}min ${seconds}s`;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "";
    }
  }

  render() {
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
