import React from "react";
import { Grid, Menu, Icon, Divider } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default function CandidateSidebar() {
  return (
    <div>
      <Grid padded>
        <Grid.Column computer={3} only="computer" id="sidebar">
          <Menu vertical borderless fluid text>
            <label>
              <Menu.Item as={NavLink} to="/candidate/getAllAdverts">
                <Icon name="list" />
                Tüm İlanları Gör
              </Menu.Item>
            </label>

            <Divider />
            <label>
              <Menu.Item as={NavLink} to="/candidate/addResume">
                <Icon name="plus" />
                CV Ekle
              </Menu.Item>
            </label>

            <Divider />
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
  );
}
