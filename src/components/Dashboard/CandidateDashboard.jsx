import React from "react";
import CandidateNavi from "../Navi/CandidateNavi";
import { Container, Grid } from "semantic-ui-react";
import ResumeAdd from "../../pages/CandidatePages/ResumeAdd";
import { Route } from "react-router";
import JobAdvertisementListForCandidates from "../../pages/CandidatePages/JobAdvertisementListForCandidate";
import CandidateSidebar from "../Sidebar/CandidateSidebar";
import JobAdvertisementDetailsForCandidates from "../../pages/CandidatePages/JobAdvertisementDetailsForCandidates";
import CompulsoryResumeAdd from "../../pages/CandidatePages/CompulsoryResumeAdd";
import { ToastContainer } from "react-toastify";
import ResumeListForCandidates from "../../pages/CandidatePages/ResumeListForCandidates";
import SingleResumeForCandidate from "../../pages/CandidatePages/SingleResumeForCandidate";
export default function CandidateDashboard() {
  return (
    <div>
      <CandidateNavi />
      <ToastContainer position="bottom-right" autoClose={1000} />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <CandidateSidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <Container className="main">
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
            <Container className="main" style={{ paddingRight: "5em" }}>
              <Route
                exact
                path="/candidate/addResume/addResumeHead"
                component={CompulsoryResumeAdd}
              />
              <Route
                exact
                path="/candidate/myResumes"
                component={ResumeListForCandidates}
              />
              {/* <Route
                exact
                path="/candidate/myResumes/:id"
                component={SingleResumeForCandidate}
              /> */}
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
