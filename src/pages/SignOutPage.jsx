import React, { Component } from "react";
import Slider from "react-slick";
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";

export default class DenemPage extends Component {
  render() {
    const slickSettings = {
      autoplay: true,
      dots: true,
      speed: 500,
    };
    return (
      <div>
        {/* SLIDER KISMI */}

        <Slider
          {...slickSettings}
          className="slide"
          style={{ marginTop: "2.3em" }}
        >
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1">
                Welcome to Human Resource Manangement System
              </Header>
              <p>Find a job withoud tairs.</p>
              <Button primary size="huge">
                Learn more
              </Button>
            </Container>
          </Segment>

          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1">
                One more for good measure
              </Header>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <Button primary size="huge">
                Browse gallery
              </Button>
            </Container>
          </Segment>
        </Slider>

        {/* ALTTAKI RESIMLER KISMI */}
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
        </Container>
      </div>
    );
  }
}
