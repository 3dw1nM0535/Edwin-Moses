import React, { Component } from "react";
import { Grid, Card, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const colors = ["red", "green", "violet", "yellow", "olive", "orange", "pink", "brown", "purple", "teal", "blue", "black", "grey"];
    return (
      <Grid stackable columns={4} container className="padding">
        <Grid.Column textAlign="center">
          <Card color={colors[Math.floor(Math.random() * colors.length)]}as={Link} to="/projects/front-end-projects">
            <Card.Content>
              <Card.Header textAlign="center" content="Fron-End Development Projects" />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Card color={colors[Math.floor(Math.random() * colors.length)]}as={Link} to="/projects/data-visualization-projects">
            <Card.Content>
              <Card.Header textAlign="center" content="Data Visualization Development Projects" />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Card color={colors[Math.floor(Math.random() * colors.length)]}as={Link} to="/projects/restful-api-projects">
            <Card.Content>
              <Card.Header textAlign="center" content="RESTFUL API Development Projects" />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Card color={colors[Math.floor(Math.random() * colors.length)]}as={Link} to="/projects/back-end-development-projects">
            <Card.Content>
              <Card.Header textAlign="center" content="Back-End Development Projects" />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ProjectsPage;
