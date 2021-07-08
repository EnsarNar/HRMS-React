import React from "react";
import CandidateNavi from "../Navi/CandidateNavi";
import { Container, Grid } from "semantic-ui-react";
import ResumeAdd from "../../pages/CandidatePages/ResumeAdd";
import { Route } from "react-router";
import JobAdvertisementListForCandidates from "../../pages/CandidatePages/JobAdvertisementListForCandidate";
import CandidateSidebar from "../Sidebar/CandidateSidebar";
import JobAdvertisementDetailsForCandidates from "../../pages/CandidatePages/JobAdvertisementDetailsForCandidates";
import CompulsoryResumeAdd from "../../pages/CandidatePages/CompulsoryResumeAdd";
export default function CandidateDashboard() {
  return (
    <div>
      <CandidateNavi />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CandidateSidebar className="main" />
          </Grid.Column>
          <Grid.Column width={12}>
            <Container>
              <Route
                exact
                path="/candidate/getAllAdverts"
                component={JobAdvertisementListForCandidates}
              />
              <Route exact path="/candidate/addResume" component={ResumeAdd} />
              <Route
                path="/candidate/getAllAdverts/:id"
                component={JobAdvertisementDetailsForCandidates}
              />
            </Container>
            <Container className="main">
              <Route
                exact
                path="/candidate/addResume/addResumeHead"
                component={CompulsoryResumeAdd}
              />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
