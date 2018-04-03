import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { projects } = this.props;
    return (
      projects.map(project =>
        <Card className="card-margin" key={project._id}>
          <Image src={project.projectScreenshot} />
          <Card.Content>
            <Card.Header>
              {project.projectTitle}
            </Card.Header>
            <Card.Description>
              {project.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a className="ui secondary button" target="_blank" href={project.urlLink}>Live Demo</a>
            <a className="ui button" target="_blank" href={project.repoLink}>Repo</a>
          </Card.Content>
        </Card>)
    );
  }
}

ProjectCard.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectCard;
