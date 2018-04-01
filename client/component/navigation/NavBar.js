import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
    };
  }

  handleClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="huge" stackable secondary>
        <Menu.Item header as={Link} to="/" active={activeItem === "Full Stack Developer"} name="Full Stack Developer" onClick={this.handleClick} />
        <Menu.Menu position="right">
          <Menu.Item as={Link} to="/projects" name="My Work" active={activeItem === "My Work"} onClick={this.handleClick} />
          <Menu.Item as={Link} to="/skills" name="My Skills" active={activeItem === "My Skills"} onClick={this.handleClick} />
          <Menu.Item as={Link} to="/blog" name="Blog" active={activeItem === "Blog"} onClick={this.handleClick} />
          <Menu.Item as={Link} to="/contact" name="Contact me" active={activeItem === "Contact me"} onClick={this.handleClick} />
        </Menu.Menu>
      </Menu>
    );
  }
}
export default NavBar;
