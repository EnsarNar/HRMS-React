import React from "react";
import { Route } from "react-router-dom";
import AdminPanel from "../Sidebar/AdminPanel";
import AdminNavi from "../Navi/AdminNavi";
import { Container, Grid } from "semantic-ui-react";
import JobAdvertisementListForAdmins from "../../pages/AdminPages/JobAdvertisementListForAdmins";
export default function AdminDashboard() {
  return (
    <div>
      <Container className="main">
        <AdminNavi />
      </Container>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <AdminPanel />
          </Grid.Column>

          <Grid.Column width={12}>
            {/* BURADA ADMIN PANELE GORE DATALAR GETİRİLECEK. */}
            <Route
              path="/admin/JobAdvertList"
              component={JobAdvertisementListForAdmins}
            />
            {/* <EmployerList />  */}
            {/* <EmployeeList />  */}
            {/* <CandidateList /> */}
            {/* <ResumeList />    */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
