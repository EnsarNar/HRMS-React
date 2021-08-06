import React, { useState, useEffect } from "react";
import { Grid, Segment } from "semantic-ui-react";
import ResumeCoverLetterService from "../../../services/resumeCoverLetterService";
export default function ResumeCoverLetterList({ id }) {
  const [coverLetter, setCoverLetter] = useState([]);
  useEffect(() => {
    let resumeCoverLetterService = new ResumeCoverLetterService();
    resumeCoverLetterService
      .getAllByResumeId(id)
      .then((result) => setCoverLetter(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {coverLetter.map((letter) => (
        <Grid columns={1} key={letter.id}>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment textAlign="center">
                <p>{letter.coverLetter}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ))}
    </div>
  );
}
