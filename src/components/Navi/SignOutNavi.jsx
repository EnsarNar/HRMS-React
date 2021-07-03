import React from "react";
import { Menu, Container } from "semantic-ui-react";
export default function SignOutNavi() {
  return (
    <div>
      <Container>
        <Menu borderless inverted size="huge" fixed="top">
          <Menu.Item header as="a">
            Project Name
          </Menu.Item>
          <Menu.Item active as="a">
            Home
          </Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item as="a">Contact</Menu.Item>
          <Menu.Item as="a">Create Account</Menu.Item>
          <Menu.Item as="a">Sign In</Menu.Item>
        </Menu>
      </Container>
    </div>
  );
}
