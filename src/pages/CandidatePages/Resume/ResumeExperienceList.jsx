import React, { useEffect, useState } from "react";
import ResumeExperienceService from "../../../services/resumeExperienceService";
import {
  Grid,
  Segment,
  Label,
  Divider,
  Button,
  Icon,
  Container,
} from "semantic-ui-react";
import UpdateResmeExperienceModal from "./update/UpdateResmeExperienceModal";
import UpdateResumeAccountModal from "./update/UpdateResumeAccountModal";
export default function ResumeExperienceList({ id }) {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    let resumeExperienceService = new ResumeExperienceService();
    resumeExperienceService
      .getAllByResumeId(id)
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
      {experiences.length === 0 ? (
        <Container textAlign="center" className="margin-top margin-bottom">
          <h1 className="opacity">Hiçbir iş tecrübesi bulunamadı :(</h1>
        </Container>
      ) : (
        <Container>
          {experiences.map((experience) => (
            <Grid columns="equal" key={experience.id}>
              <Button color="red" style={{ padding: "7px 7px" }}>
                <Icon name="trash" />
                Sil
              </Button>
              <UpdateResmeExperienceModal
                resumeId={experience.resumeId}
                experience={experience}
              />
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
              <Divider />
            </Grid>
          ))}
        </Container>
      )}
    </div>
  );
}
