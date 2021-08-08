import React from "react";
import { Grid, Icon, Divider } from "semantic-ui-react";
export default function Footer() {
  return (
    <div>
      <Grid
        columns="equal"
        style={{
          height: "20em",
          background: "linear-gradient(to bottom, #9cecfb, #65c7f7, #0052d4)",
        }}
      >
        <Grid.Row>
          <Grid.Column>
            <h3 className="opacity"> İletişim</h3>
            <Divider />
            <h3 className="opacity">
              {" "}
              <Icon name="mail" /> xxx@hotmail.com
            </h3>
            <h3 className="opacity">
              <Icon name="phone" /> +90 XXX XXX XXXX
            </h3>
          </Grid.Column>
          <Grid.Column>
            <h3 className="opacity">
              <Icon name="copyright outline" />
              Any Rights Didnt Reserved
            </h3>
            <Divider />
            <h4 className="opacity">Ensar Nar</h4>
            <h4 className="opacity">HRMS Project</h4>
          </Grid.Column>
          <Grid.Column>
            <h3 className="opacity">Hesaplar</h3>
            <Divider />
            <h3 className="opacity">
              <Icon name="linkedin" style={{ color: "#0274B3" }} /> Linkedin
            </h3>
            <h3 className="opacity">
              <Icon name="instagram" style={{ color: "#BA2E9C" }} /> Instagram
            </h3>
            <h3 className="opacity">
              <Icon name="facebook" style={{ color: "#4867AA" }} />
              Facebook
            </h3>
            <h3 className="opacity">
              <Icon name="twitter" style={{ color: "#33CCFF" }} /> Twitter
            </h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
