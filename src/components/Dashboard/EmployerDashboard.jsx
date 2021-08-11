import React from "react";
import EmployerNavi from "../Navi/EmployerNavi";
import EmployerPage from "../Sidebar/EmployerPage";
import JobAdvertisementAdd from "../../pages/JobAdvertisementAdd";
import { Container, Grid } from "semantic-ui-react";
import { Route } from "react-router";
import deneme from "../../pages/deneme";
import EmployerInfo from "../../pages/EmployerPages.jsx/EmployerInformations/EmployerInfo";
export default function EmployerDashboard() {
  return (
    <div>
      <EmployerNavi />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <EmployerPage />
          </Grid.Column>
          <Grid.Column width={13}>
            <Container className="main">
              <Route
                path="/employer/addJobAdvert"
                component={JobAdvertisementAdd}
              />
              <Route path="/employer/myAdverts" component={deneme} />
              <Route path="/employer/personalInfos" component={EmployerInfo} />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
