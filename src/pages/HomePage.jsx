import React from "react";
import { Button, Grid } from "semantic-ui-react";
export default function HomePage() {
  return (
    <div>
      <div className="homepage">
        <div className="contents">
          <h1>HRMS</h1>
          <strong>
            <i>"Find job without tears"</i>
          </strong>
          <Grid centered>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button color="blue" inverted>
                  Giriş Yap
                </Button>
                <Button color="blue" inverted>
                  Kayıt Ol
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  );
}
