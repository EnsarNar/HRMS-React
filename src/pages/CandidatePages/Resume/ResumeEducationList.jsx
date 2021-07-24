import React, { useState, useEffect } from "react";
import { Grid, Segment, Label, Divider, Icon, Popup } from "semantic-ui-react";
import ResumEducationService from "../../../services/resumeEducationService";
export default function ResumeEducationList({ id }) {
  const [educations, setEducations] = useState([]);
  useEffect(() => {
    let resumeEducationService = new ResumEducationService();
    resumeEducationService
      .getAllByResumeId(id)
      .then((result) => setEducations(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Grid columns="equal" divided>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Divider />
            <h3>Eğitim Bilgileri</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {educations.map((education) => (
        <Grid columns="equal" key={education.id}>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">Okul</Label>
                <Popup
                  content="Update"
                  trigger={
                    <Label attached="top right" basic>
                      <Icon name="file alternate" />
                    </Label>
                  }
                />

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
              {!education.graduateDate ? (
                <Segment padded>
                  <Label attached="top left">Mezuniyet Tarihi</Label>
                  <p>Devam ediyor...</p>
                </Segment>
              ) : (
                <Segment padded>
                  <Label attached="top left">Mezuniyet Tarihi</Label>
                  {education.graduateDate}
                </Segment>
              )}
            </Grid.Column>
          </Grid.Row>

          <Divider />
        </Grid>
      ))}
    </div>
  );
}
