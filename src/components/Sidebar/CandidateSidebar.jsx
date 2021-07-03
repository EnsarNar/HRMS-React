import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default function CandidateSidebar() {
  return (
    <div>
      <Grid padded>
        <Grid.Column computer={3} only="computer" id="sidebar">
          <Menu vertical borderless fluid text>
            <Menu.Item as={NavLink} to="/candidate/getAllAdverts">
              Tüm İlanları Gör
            </Menu.Item>
            <Menu.Item as={NavLink} to="/candidate/addResume">
              CV Ekle
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
  );
}
