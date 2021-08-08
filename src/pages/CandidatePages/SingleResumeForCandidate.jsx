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

    resumeService
      .addPhoto(data, id)
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
          <Button
            style={{
              background:
                "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",
            }}
            animated="fade"
          >
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
                      <Label
                        style={{
                          background:
                            "linear-gradient(to right, #2193b0, #6dd5ed)",
                        }}
                        as="a"
                      >
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
                  <Grid.Column textAlign="center">
                    {!resume.coverLetter > 0 ? (
                      // <Container textAlign="center" className=" margin-bottom">
                      // <h1 className="opacity"> Hiçbir ön yazı bulunamadı :(</h1>
                      // </Container>
                      <Button
                        animated="vertical"
                        color="green"
                        style={{ marginBottom: "1em", padding: "7px 7px" }}
                        onClick={() => setIsActive(true)}
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
              <Grid.Column textAlign="center">
                {/* Buton getiriyor */}
                <AddResumeEducationModal resumeId={id} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ModalContent>
        {/* Resume Languages List */}
        <ModalContent>
          <ResumeLanguageList id={id} />
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <AddResumeLanguageModal resumeId={id} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ModalContent>
        {/* Resume Technology List */}
        <ModalContent>
          <ResumeTechnologyList id={id} />
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <AddResumeTechnologyModal resumeId={id} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ModalContent>
        {/* Resume Experience  List*/}
        <ModalContent>
          <ResumeExperienceList id={id} />
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <AddResumeExperienceModal resumeId={id} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ModalContent>
        {/* Resume Accounts  */}
        <ModalContent>
          <ResumeAccountList id={id} />

          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <AddResumeAccountModal resumeId={id} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ModalContent>

        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            <Icon name="close" />
            Çık
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
//Mapleyerek deil de backendde yazdıgın ResumeLanguage ResumeEducation gibi şeyleri tek tek çekerek de yapabilirsin hem kodları kısaltabilirsin bu yolla
