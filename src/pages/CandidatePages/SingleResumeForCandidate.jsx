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
import UpdateResumeCoverLetter from "./Resume/update/UpdateResumeCoverLetter";
import ResumeCoverLetterList from "./Resume/ResumeCoverLetterList";
import {
  Button,
  Image,
  Modal,
  Label,
  Grid,
  Icon,
  ModalContent,
  Container,
  Divider,
} from "semantic-ui-react";
import ResumeTechnologyList from "./Resume/ResumeTechnologyList";
import AddResumeTechnologyModal from "./Resume/add/AddResumeTechnologyModal";
import { toast } from "react-toastify";
export default function SingleResumeForCandidate({ id }) {
  const [open, setOpen] = useState(false);
  const [resumes, setResumes] = useState([]);
  const [isActive, setIsActive] = useState(false);
  let resumeService = new ResumeService();
  useEffect(() => {
    resumeService
      .getById(id)
      .then((result) => setResumes(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  let handleInputFile = (e) => {
    let data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("ResumeId", id);

    resumeService
      .addPhoto(data)
      .then((result) => toast.success("Fotoğraf Eklendi !"))
      .catch((err) => console.log(err.message));
  };
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
            {/* Fundamental Infos */}
            <Grid columns="equal" divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Image size="small" src={resume.profilePictureUrl} wrapped />
                  <div style={{ marginTop: "1em" }}>
                    <label htmlFor="inputfile">
                      <Label color="teal" as="a">
                        <Icon name="exchange" />
                        Değiştir
                      </Label>
                    </label>
                    <input
                      type="file"
                      className="input-file"
                      id="inputfile"
                      onChange={(e) => handleInputFile(e)}
                    />
                  </div>
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
            {/* Cover Letter */}
            <Grid columns="equal" divided>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Divider />
                  <h3>Ön Yazı</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            {isActive ? (
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      animated="vertical"
                      onClick={() => setIsActive(false)}
                      color="red"
                      style={{ marginBottom: "1em", padding: "7px 7px" }}
                    >
                      <Button.Content visible style={{ paddingLeft: "1em" }}>
                        İptal
                      </Button.Content>
                      <Button.Content hidden>
                        <Icon name="close" />
                      </Button.Content>
                    </Button>

                    <UpdateResumeCoverLetter
                      changeIsActive={(value) => setIsActive(value)}
                      resumeId={resume.id}
                      coverLetter={resume.coverLetter}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            ) : (
              <Grid columns="equal">
                {console.log(!resume.coverLetter)}
                <Grid.Row>
                  <Grid.Column>
                    {!resume.coverLetter > 0 ? (
                      <Button
                        animated="vertical"
                        color="green"
                        style={{ marginBottom: "1em", padding: "7px 7px" }}
                      >
                        <Button.Content visible style={{ paddingLeft: "1em" }}>
                          Ekle
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name="plus" />
                        </Button.Content>
                      </Button>
                    ) : (
                      <Button
                        animated="vertical"
                        onClick={() => setIsActive(true)}
                        color="green"
                        style={{ marginBottom: "1em", padding: "7px 7px" }}
                      >
                        <Button.Content visible style={{ paddingLeft: "1em" }}>
                          Güncelle
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name="pencil" />
                        </Button.Content>
                      </Button>
                    )}

                    <ResumeCoverLetterList id={id} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            )}
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
        {/* Resume Technology List */}
        <ModalContent>
          <ResumeTechnologyList id={id} />
          <Grid>
            <Grid.Row>
              <Container>
                <AddResumeTechnologyModal resumeId={id} />
              </Container>
            </Grid.Row>
          </Grid>
        </ModalContent>
        {/* Resume Experience  List*/}
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
