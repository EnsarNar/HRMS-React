import React, { useState, useEffect } from "react";
import ResumeTechnologyService from "../../../services/resumeTechnologyService";
import { Grid, Divider, Segment, Label, Rating } from "semantic-ui-react";
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
      {technologies.map((tech) => (
        <Grid key={tech.id} columns="equal">
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
    </div>
  );
}
