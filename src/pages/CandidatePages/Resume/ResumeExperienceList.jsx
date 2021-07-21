import React, { useEffect, useState } from "react";
import ResumeExperienceService from "../../../services/resumeExperienceService";
import { Grid, Segment, Label, Divider } from "semantic-ui-react";
export default function ResumeExperienceList() {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    let resumeExperienceService = new ResumeExperienceService();
    resumeExperienceService
      .getAllByResumeId(13)
      .then((result) => setExperiences(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Grid columns="equal" divided>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Divider />
            <h3>İş Tecübeleri</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {experiences.map((experience) => (
        <Grid columns="equal" key={experience.id}>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">Şirket</Label>
                {experience.companyName}
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">Pozisyon</Label>
                {experience.position}
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">İşe Başlangıç Tarihi</Label>
                {experience.startDate}
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Segment padded>
                <Label attached="top left">İşten Ayrılma Tarihi</Label>
                {experience.endDate}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ))}
    </div>
  );
}
