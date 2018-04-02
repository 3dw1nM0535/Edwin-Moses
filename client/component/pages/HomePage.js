import React, { Component } from "react";
import { Grid, Segment, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
            <p>Check this out, I have code and build on <Link to="https://www.codecademy.com/3dw1nm0535">Codecademy</Link>
            and <Link to="https://www.freecodecamp.org/3dw1nm0535">freeCodeCamp</Link>. It took me a year to work through
            the curriculums and i'm still learning each and everyday. The community is vibrant.</p>
            <p>I'm an activist at <Link to="https://twitter.com/_100DaysOfCode">#100DaysOfCode</Link>. I code everyday.
            I read about self-taught developer stories. I choose to stay freshy and motivated.</p>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default HomePage;
