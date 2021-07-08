import React from "react";

import { NavLink } from "react-router-dom";
import {
  Grid,
  Segment,
  Header,
  Container,
  Image,
  Button,
} from "semantic-ui-react";

export default function ResumeAdd() {
  return (
    <div>
      <Container className="main">
        <Segment vertical>
          <Grid stackable className="main">
            <Grid.Column width={10}>
              <Header as="h1">
                First featurette heading.{" "}
                <span className="sub">It'll blow your mind.</span>
              </Header>
              <p className="font" style={{ fontSize: "1.5em" }}>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src="https://www.techjockey.com/blog/wp-content/uploads/2019/08/HRMS-Infographics_banner.png" />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment vertical>
          <Grid stackable>
            <Grid.Column width={6}>
              <Image src="https://nimbleinfosys.com/img/products/hrms/hrm_banner.png" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h1">
                Oh yeah, <span className="sub">it's that good.</span>
              </Header>
              <p className="font" style={{ fontSize: "1.5em" }}>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Container className="main">
          <Button
            as={NavLink}
            to="/candidate/addResume/addResumeHead"
            color="green"
            className="ui fluid button"
          >
            Hemen Başla !
          </Button>
        </Container>
      </Container>
    </div>
  );
}
