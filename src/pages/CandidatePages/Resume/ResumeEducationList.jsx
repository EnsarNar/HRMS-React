import React, { useState, useEffect } from "react";
import {
  Grid,
  Segment,
  Label,
  Divider,
  Icon,
  Popup,
  Button,
  Container,
} from "semantic-ui-react";
import ResumEducationService from "../../../services/resumeEducationService";
import UpdateResumeEducationModal from "./update/UpdateResumeEducationModal.jsx";
export default function ResumeEducationList({ id }) {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    let resumeEducationService = new ResumEducationService();
    resumeEducationService
      .getAllByResumeIdOrderedByIdAsc(id)
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
      {educations.length === 0 ? (
        <Container textAlign="center" className="margin-top margin-bottom">
          <h1 className="opacity"> Hiçbir eğitim bilgisi bulunamadı :(</h1>
        </Container>
      ) : (
        <Container>
          {educations.map((education) => (
            <Grid columns="equal" key={education.id}>
              {console.log(education)}
              <Button color="red" style={{ padding: "7px 7px" }}>
                <Icon name="trash" />
                Sil
              </Button>
              {/* Güncelleme Modali */}
              <UpdateResumeEducationModal
                resumeId={education.resumeId}
                education={education}
              />
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
        </Container>
      )}
    </div>
  );
}
