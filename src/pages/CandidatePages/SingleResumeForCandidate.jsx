import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ResumeService from "../../services/resumeService";
import ResumeEducationList from "./Resume/ResumeEducationList";
import ResumeLanguageList from "./Resume/ResumeLanguageList";
import ResumeExperienceList from "./Resume/ResumeExperienceList";
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
          key={resume.id}
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
          {/* Resume Education List */}
          <ModalContent>
            <ResumeEducationList id={resume.id} />
            <Grid>
              <Grid.Row>
                <Popup
                  content="Add new education"
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
          {/* Resume Languages List */}
          <ModalContent>
            <ResumeLanguageList id={resume.id} />
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
          {/* Resume Experience  */}
          <ModalContent>
            <ResumeExperienceList id={resume.id} />
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
          {/* Resume Technology */}
          {/* <ModalContent>
            <ResumeTechnologyList id={resume.id} />
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
          </ModalContent> */}

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
