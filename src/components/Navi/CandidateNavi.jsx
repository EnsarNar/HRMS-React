import React from "react";
import { Grid, Menu } from "semantic-ui-react";
import CandidateCartSummary from "../../pages/CandidatePages/CandidateCartSummary";
import { useSelector } from "react-redux";

export default function CandidateNavi() {
  // const { favoriteItems } = useSelector((state) => state.favorites);

  return (
    <div>
      <Grid padded>
        <Menu borderless inverted fluid fixed="top" size="mini">
          <Menu.Item header>HRMS</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              {/* {favoriteItems.length > 0 && <CandidateCartSummary />} */}
              <CandidateCartSummary />
            </Menu.Item>
            <Menu.Item>Candidate Page</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid>
    </div>
  );
}
