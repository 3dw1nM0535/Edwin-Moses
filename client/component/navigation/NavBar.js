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
      <Menu secondary>
        <Menu.Item as={Link} to="/" name="Edwin Moses" active={activeItem === "Edwin Moses"} onClick={this.handleClick} />
        <Menu.Item as={Link} to="/projects" name="Projects" active={activeItem === "Projects"} onClick={this.handleClick} />
        <Menu.Item as={Link} to="/blog" name="Blog" active={activeItem === "Blog"} onClick={this.handleClick} />
        <Menu.Item as={Link} to="/contact" name="Contact me" active={activeItem === "Contact me"} onClick={this.handleClick} />
      </Menu>
    );
  }
}
export default NavBar;
