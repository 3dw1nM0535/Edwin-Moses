import React, { Component } from "react";
import { Grid, Segment, Image, Header } from "semantic-ui-react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container columns={2} stackable className="padding">
        <Grid.Column textAlign="center">
          <Image rounded size="medium" centered src="https://res.cloudinary.com/dazskjikr/image/upload/v1522665860/me3.jpg" />
          <Header as="h1" textAlign="center">Edwin Moses</Header>
          <span className="ui header disabled small">Full Stack Developer</span>
        </Grid.Column>
        <Grid.Column>
          <Segment color="blue">
            <span className="ui header disabled small">Full Stack Developer</span>
            <p>I'm a self-taught developer.</p>
            <p>I'm coding for passion. I'm coding to solve. I'm coding to build.
            I'm coding to inspire. And also i love JavaScript. I'm learning it's in and out everyday.</p>
            <p>Check this out, I have code and build on <a target="_blank" href="https://www.codecademy.com/3dw1nm0535">Codecademy</a>
            and <a target="_blank" href="https://www.freecodecamp.org/3dw1nm0535">freeCodeCamp</a>. It took me a year to work through
            the curriculums and i'm still learning each and everyday. The community is vibrant.</p>
            <p>I'm an activist at <a target="_blank" href="https://twitter.com/_100DaysOfCode">#100DaysOfCode</a>. I code everyday.
            I read about self-taught developer stories. I choose to stay frosty and motivated.
            </p>
            <p><a target="_blank" href="https://github.com/3dw1nM0535">GitHub</a> <a href="https://twitter.com/edwinloms" target="_blank">Twitter</a> <a href="https://www.linkedin.com/in/edwin-moses-2b0240115" target="_blank">LinkedIn</a></p>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default HomePage;
