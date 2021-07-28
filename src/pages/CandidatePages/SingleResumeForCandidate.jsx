import React, { useState, useEffect } from "react";
import ResumeService from "../../services/resumeService";
import ResumeEducationList from "./Resume/ResumeEducationList";
import ResumeLanguageList from "./Resume/ResumeLanguageList";
import ResumeExperienceList from "./Resume/ResumeExperienceList";
import ResumeAccountList from "./Resume/ResumeAccountList";
import AddResumeEducationModal from "./Resume/add/AddResumeEducationModal";
import AddResumeLanguageModal from "./Resume/add/AddResumeLanguageModal";
import AddResumeExperienceModal from "./Resume/add/AddResumeExperienceModal";
import AddResumeAccountModal from "./Resume/add/AddResumeAccountModal";
import {
  Button,
  Image,
  Modal,
  Segment,
  Grid,
  Icon,
  ModalContent,
  Container,
  Divider,
} from "semantic-ui-react";

export default function SingleResumeForCandidate({ id }) {
  const [open, setOpen] = useState(false);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getById(id)
      .then((result) => setResumes(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button color="green" animated="fade">
            <Button.Content visible>Detaylar</Button.Content>
            <Button.Content hidden>
              <Icon name="mouse pointer" />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>Özgeçmiş</Modal.Header>

        {resumes.map((resume) => (
          <Modal.Content key={resume.id}>
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
                  <Segment textAlign="center" style={{ height: "20em" }}>
                    <p style={{ maxWidth: "808px" }}>{resume.coverLetter}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        ))}

        {/* Resume Education List */}
        <ModalContent>
          <ResumeEducationList id={id} />

          <Grid>
            <Grid.Row>
              <Container>
                {/* Buton getiriyor */}
                <AddResumeEducationModal resumeId={id} />
              </Container>
            </Grid.Row>
          </Grid>
        </ModalContent>
        {/* Resume Languages List */}
        <ModalContent>
          <ResumeLanguageList id={id} />
          <Grid>
            <Grid.Row>
              <Container>
                <AddResumeLanguageModal resumeId={id} />
              </Container>
            </Grid.Row>
          </Grid>
        </ModalContent>
        {/* Resume Experience  */}
        <ModalContent>
          <ResumeExperienceList id={id} />
          <Grid>
            <Grid.Row>
              <Container>
                <AddResumeExperienceModal resumeId={id} />
              </Container>
            </Grid.Row>
          </Grid>
        </ModalContent>
        {/* Resume Accounts  */}
        <ModalContent>
          <ResumeAccountList id={id} />
          <Grid>
            <Grid.Row>
              <Container>
                <AddResumeAccountModal resumeId={id} />
              </Container>
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
    </div>
  );
}
//Mapleyerek deil de backendde yazdıgın ResumeLanguage ResumeEducation gibi şeyleri tek tek çekerek de yapabilirsin hem kodları kısaltabilirsin bu yolla
