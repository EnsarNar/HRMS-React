import React, { useState, useEffect } from "react";
import ResumeTechnologyService from "../../../services/resumeTechnologyService";
import {
  Grid,
  Divider,
  Segment,
  Label,
  Rating,
  Button,
  Icon,
  Container,
} from "semantic-ui-react";
import UpdateResumeTechnologiesModal from "./update/UpdateResumeTechnologiesModal";
export default function ResumeTechnologyList({ id }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    let resumeTechnologyService = new ResumeTechnologyService();
    resumeTechnologyService
      .getAllById(id)
      .then((result) => setTechnologies(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Divider />
            <h3>Teknolojiler</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {technologies.length === 0 ? (
        <Container textAlign="center" className="margin-top margin-bottom">
          <h1 className="opacity"> Hiçbir teknoıloji bilgisi bulunamadı :(</h1>
        </Container>
      ) : (
        <Container>
          {technologies.map((tech) => (
            <Grid key={tech.id} columns="equal">
              <Button color="red" style={{ padding: "7px 7px" }}>
                <Icon name="trash" />
                Sil
              </Button>
              <UpdateResumeTechnologiesModal
                resumeId={tech.resumeId}
                technology={tech}
              />
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Segment style={{ height: "95px" }} padded>
                    <Label attached="top left">Teknoloji</Label>
                    {tech.programmingLanguageName}
                  </Segment>
                </Grid.Column>

                <Grid.Column textAlign="center">
                  <Segment padded>
                    <Label attached="top left">Seviye</Label>

                    <Rating
                      maxRating={5}
                      defaultRating={tech.grade}
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
