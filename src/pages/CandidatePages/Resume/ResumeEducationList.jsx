import React, { useState, useEffect } from "react";
import {
  Grid,
  Segment,
  Label,
  Divider,
  Icon,
  Popup,
  Button,
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

      {educations.map((education) => (
        <Grid columns="equal" key={education.id}>
          <Button color="red" size="small">
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
    </div>
  );
}
