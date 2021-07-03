import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function EmployerPage() {
  return (
    <div>
      <Grid padded>
        <Grid.Column computer={3} only="computer" id="sidebar">
          <Menu vertical borderless fluid text>
            <Menu.Item as={NavLink} to="/employer/addJobAdvert">
              İlan Ekle
            </Menu.Item>
            <Menu.Item as={NavLink} to="/employer/myAdverts">
              İlanlarım
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
  );
}
