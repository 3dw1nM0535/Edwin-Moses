import React, { Component } from "react";
import { Grid, Card, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SkillsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const colors = ["red", "green", "violet", "yellow", "olive", "orange", "pink", "brown", "purple", "teal", "blue", "black", "grey"];
    return (
      <Grid stackable columns={4} container className="padding">
        <Grid.Column textAlign="center">
          <Card color={colors[Math.floor(Math.random() * colors.length)]}>
            <Card.Content>
              <Card.Header textAlign="center" content="Fron-End Development Skills" />
              <Card.Description>
                <Label className="spaced">HTML</Label>
                <Label className="spaced">CSS</Label>
                <Label className="spaced">JavaScript</Label>
                <Label className="spaced">JSON/API Calls</Label>
                <Label className="spaced">Git</Label>
                <Label className="spaced">React</Label>
                <Label className="spaced">Redux</Label>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Card color={colors[Math.floor(Math.random() * colors.length)]}>
            <Card.Content>
              <Card.Header textAlign="center" content="Data Visualization Development Skills" />
              <Card.Description>
                <Label className="spaced">D3.js</Label>
                <Label className="spaced">Chart.js</Label>
                <Label className="spaced">Git</Label>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Card color={colors[Math.floor(Math.random() * colors.length)]}>
            <Card.Content>
              <Card.Header textAlign="center" content="RESTFUL API Development Skills" />
              <Card.Description>
                <Label className="spaced">ExpressJS</Label>
                <Label className="spaced">NodeJS</Label>
                <Label className="spaced">MongoDB</Label>
                <Label className="spaced">Mongoose</Label>
                <Label className="spaced">Git</Label>
                <Label className="spaced">Postman</Label>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Card color={colors[Math.floor(Math.random() * colors.length)]}>
            <Card.Content>
              <Card.Header textAlign="center" content="Back-End Development Skills" />
              <Card.Description>
                <Label className="spaced">NodeJS</Label>
                <Label className="spaced">ExpressJS</Label>
                <Label className="spaced">MongoDB</Label>
                <Label className="spaced">Mongoose</Label>
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SkillsPage;
