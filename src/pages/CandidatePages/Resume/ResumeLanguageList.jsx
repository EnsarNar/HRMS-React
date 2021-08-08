import React, { useState, useEffect } from "react";
import ResumeLangugeService from "../../../services/resumeLanguageService";
import {
  Grid,
  Segment,
  Label,
  Divider,
  Rating,
  Button,
  Icon,
  Container,
} from "semantic-ui-react";
import UpdateResumeLanguageModal from "./update/UpdateResumeLanguageModal";
export default function ResumeLanguageList({ id }) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    let resumeLanguageService = new ResumeLangugeService();
    resumeLanguageService
      .getAllByResumeId(id)
      .then((result) => setLanguages(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Grid columns="equal" divided>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Divider />
            <h3>Yabancı Diller</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {languages.length === 0 ? (
        <Container textAlign="center" className="margin-top margin-bottom">
          <h1 className="opacity"> Hiçbir dil bilgisi bulunamadı :(</h1>
        </Container>
      ) : (
        <Container>
          {languages.map((language) => (
            <Grid columns="equal" key={language.id}>
              <Button color="red" style={{ padding: "7px 7px" }}>
                <Icon name="trash" />
                Sil
              </Button>

              <UpdateResumeLanguageModal
                resumeId={language.resumeId}
                id={language.id}
              />

              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Segment style={{ height: "95px" }} padded>
                    <Label attached="top left">Dil</Label>
                    {language.languageName}
                  </Segment>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Segment padded>
                    <Label attached="top left">Seviye</Label>
                    <Rating
                      maxRating={5}
                      defaultRating={language.grade}
                      icon="star"
                      size="huge"
                      disabled
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          ))}
        </Container>
      )}
    </div>
  );
}
