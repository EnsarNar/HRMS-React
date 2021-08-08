import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Menu, Image, Dropdown } from "semantic-ui-react";

export default function EmployerNavi() {
  return (
    <div>
      <Grid padded>
        <Menu
          borderless
          fluid
          fixed="top"
          style={{
            background: "linear-gradient(to right, #e0eafc, #cfdef3)",
          }}
          size="small"
        >
          <Menu.Item header>HRMS</Menu.Item>
          <Menu.Item style={{ paddingLeft: "60em" }}>
            <Image
              avatar
              spaced="right"
              src="http://res.cloudinary.com/ddjzhbvp4/image/upload/v1623524587/fytwz9glhwmnajsfqosg.png"
            />
            <Dropdown pointing="middle" text="Ensar">
              <Dropdown.Menu>
                <Dropdown.Item
                  text="Bilgilerim"
                  icon="info"
                  as={NavLink}
                  to="/employer/personalInfos"
                />
                <Dropdown.Item text="Çıkış Yap" icon="sign-out" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>Candidate Page</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid>
    </div>
  );
}
