import React from "react";
import { Grid, Menu, Icon, Divider } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function EmployerPage() {
  return (
    <div>
      <Grid>
        <Grid.Column
          computer={3}
          only="computer"
          id="sidebar"
          style={{
            background: "linear-gradient(to left, #d3cce3, #e9e4f0)",
          }}
        >
          <Menu vertical borderless fluid text>
            <label>
              <Menu.Item as={NavLink} to="/employer/addJobAdvert">
                <Icon name="plus" /> İlan Ekle
              </Menu.Item>
            </label>
            <Divider />
            <label>
              <Menu.Item as={NavLink} to="/employer/myAdverts">
                <Icon name="list alternate" />
                İlanlarım
              </Menu.Item>
            </label>
            <Divider />
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
  );
}
