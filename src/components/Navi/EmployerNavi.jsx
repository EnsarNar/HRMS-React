import React from "react";
import { Grid, Menu } from "semantic-ui-react";

export default function EmployerNavi() {
  return (
    <div>
      <Grid padded>
        <Menu borderless inverted fluid fixed="top">
          <Menu.Item header as="a">
            Project name
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a">Employer Page</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid>
    </div>
  );
}
