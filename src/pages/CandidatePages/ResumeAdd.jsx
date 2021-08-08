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
      <div className="main" style={{ marginRight: "4em" }}>
        <Segment vertical>
          <Grid stackable className="main">
            <Grid.Column width={10}>
              <Header>
                <h1>
                  Hızlı Bir Şekilde İş mi Bulmak İstiyorsun ? O zaman dinle!
                </h1>
              </Header>
              <p className="font" style={{ fontSize: "1.5em" }}>
                Birçok aday arasından sıyrılıp öne çıkmak için etkili bir CV
                hazırlaman gerekiyor. Ne duruyorsun o zaman ? Hemen Başla !
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
              <Header>
                <h1>Etkili Bir CV Nasıl mı Hazırlanır ?</h1>
              </Header>
              <p className="font" style={{ fontSize: "1.5em" }}>
                Etkili bir CV hazırlamak için yapman gereken tek şey gerçekçi
                olmak ve eksiksiz bir şekilde bilgileri doldurmak. Üstelik merak
                etme, CV hazırlayabilmen için sana hazır bir ortam sunuyoruz.
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
      </div>
    </div>
  );
}
