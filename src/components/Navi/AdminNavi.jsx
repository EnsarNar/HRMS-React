import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Image, Container, Button } from "semantic-ui-react";

export default function AdminNavi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="HRMS" />
          <Menu.Item name="ADMIN Page" />

          <Menu.Item>
            <Button color="red">Admin Panel</Button>
          </Menu.Item>

          <Menu.Item style={{ paddingLeft: "35em" }}>
            <Image
              avatar
              spaced="right"
              src="http://res.cloudinary.com/ddjzhbvp4/image/upload/v1623524587/fytwz9glhwmnajsfqosg.png"
            />
            <Dropdown pointing="middle" text="Ensar">
              <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info" />
                <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
