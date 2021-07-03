import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function AdminPanel() {
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item name="Employers" />
        <Menu.Item name="Employees" />
        <Menu.Item name="Candidates" />
        <Menu.Item as={NavLink} to="/admin/JobAdvertList" name="JobAdverts" />
      </Menu>
    </div>
  );
}
