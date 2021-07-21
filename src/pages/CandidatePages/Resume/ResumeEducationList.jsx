import React, { useState, useEffect } from "react";
import { Grid, Segment, Label } from "semantic-ui-react";
import ResumEducationService from "../../../services/resumeEducationService";
export default function ResumeEducationList({ id }) {
  const [educations, setEducations] = useState([]);
  useEffect(() => {
    let resumeEducationService = new ResumEducationService();
    resumeEducationService
      .getByResumeId(id)
      .then((result) => setEducations(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      {educations.map((education) => (
        <Grid columns="equal" key={education.id}>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">Okul</Label>
                {education.schoolName}
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">Bölüm</Label>
                {education.departmentName}
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">Okula Başlama Tarihi</Label>
                {education.startingDate}
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">Mezuniyet Tarihi</Label>
                {education.graduateDate}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ))}
    </div>
  );
}
