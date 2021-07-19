import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ResumeService from "../../services/resumeService";
import {
  Button,
  Image,
  Modal,
  Segment,
  Grid,
  Icon,
  ModalContent,
  Label,
  Divider,
  Rating,
  Popup,
  ModalActions,
} from "semantic-ui-react";
export default function SingleResumeForCandidate() {
  const [open, setOpen] = useState(false);
  const [resumes, setResumes] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getById(id)
      .then((result) => setResumes(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      {resumes.map((resume) => (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Tıkla</Button>}
        >
          <Modal.Header>Özgeçmiş</Modal.Header>

          <Modal.Content scrolling>
            <Grid columns="equal" divided>
              <Grid.Row>
                <Grid.Column>
                  <Image size="small" src={resume.profilePictureUrl} wrapped />
                </Grid.Column>
                <Grid.Column textAlign="center">
                  İsim
                  <h1>{resume.candidateFirstName}</h1>
                </Grid.Column>
                <Grid.Column textAlign="center">
                  Soyisim
                  <h1>{resume.candidateLastName}</h1>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <ModalContent>
            <Grid columns="equal" divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Divider />
                  <h3>Eğitim Bilgileri</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {resume.resumeEducation.map((education) => (
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
            <Grid>
              <Grid.Row>
                <Popup
                  content="Add new school information"
                  trigger={
                    <Button
                      style={{ marginLeft: "48%" }}
                      color="olive"
                      icon="add"
                    />
                  }
                />
              </Grid.Row>
            </Grid>
          </ModalContent>
          <ModalContent>
            <Grid columns="equal" divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Divider />
                  <h3>Yabancı Diller</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {resume.resumeLanguage.map((language) => (
              <Grid columns="equal" key={language.id}>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Segment style={{ height: "95px" }} padded>
                      <Label attached="top left">Dil</Label>
                      {language.language.languageName}
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
            <Grid>
              <Grid.Row>
                <Popup
                  content="Add new language"
                  trigger={
                    <Button
                      style={{ marginLeft: "48%" }}
                      color="olive"
                      icon="add"
                    />
                  }
                />
              </Grid.Row>
            </Grid>
          </ModalContent>
          <ModalContent>
            <Grid columns="equal" divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Divider />
                  <h3>İş Tecübeleri</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {resume.resumeExperience.map((experience) => (
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
            <Grid>
              <Grid.Row>
                <Popup
                  content="Add new experience"
                  trigger={
                    <Button
                      style={{ marginLeft: "48%" }}
                      color="olive"
                      icon="add"
                    />
                  }
                />
              </Grid.Row>
            </Grid>
          </ModalContent>
          <ModalContent>
            <Grid columns="equal" divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Divider />
                  <h3>Teknolojiler</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {resume.resumeTechnology.map((technology) => (
              <Grid columns="equal" key={technology.id}>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Segment style={{ height: "95px" }} padded>
                      <Label attached="top left">Teknoloji</Label>
                      {technology.programmingLanguageName}
                    </Segment>
                  </Grid.Column>
                  <Grid.Column textAlign="center">
                    <Segment padded>
                      <Label attached="top left">Seviye</Label>
                      <Rating
                        maxRating={5}
                        defaultRating={technology.grade}
                        icon="star"
                        size="huge"
                        disabled
                      />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ))}
            <Grid>
              <Grid.Row>
                <Popup
                  content="Add new experience"
                  trigger={
                    <Button
                      style={{ marginLeft: "48%" }}
                      color="olive"
                      icon="add"
                    />
                  }
                />
              </Grid.Row>
            </Grid>
          </ModalContent>

          <ModalContent>
            <Grid columns="equal" divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Divider />
                  <h3>Ön Yazı</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid columns={1}>
              <Grid.Row stretched className="deneme ">
                <Grid.Column>
                  <Segment
                    textAlign="center"
                    scrolling
                    style={{ height: "20em" }}
                  >
                    <p style={{ maxWidth: "808px" }}>{resume.coverLetter}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </ModalContent>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Çık
            </Button>
            <Button
              content="Kaydet"
              labelPosition="right"
              icon="checkmark"
              onClick={() => setOpen(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
      ))}
    </div>
  );
}
//Mapleyerek deil de backendde yazdıgın ResumeLanguage ResumeEducation gibi şeyleri tek tek çekerek de yapabilirsin hem kodları kısaltabilirsin bu yolla
