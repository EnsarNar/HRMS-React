import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import ResumeService from "../../services/resumeService";
import ResumeEducationList from "./Resume/ResumeEducationList";
import ResumeLanguageList from "./Resume/ResumeLanguageList";
import ResumeExperienceList from "./Resume/ResumeExperienceList";
import {
  openModalPage,
  closeModalPage,
} from "../../store/actions/modalActions";
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
  const modalState = useSelector((state) => state.modalValue.modalState);
  const { open } = modalState;
  const dispatch = useDispatch();
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
      {console.log(open)}
      {resumes.map((resume) => (
        <Modal
          onClose={() => dispatch(closeModalPage(false))}
          onOpen={() => dispatch(openModalPage(true))}
          open={open}
          trigger={<Button>tıkla</Button>}
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
            <Button
              color="black"
              onClick={() => dispatch(closeModalPage(false))}
            >
              Çık
            </Button>
            <Button
              content="Kaydet"
              labelPosition="right"
              icon="checkmark"
              onClick={() => dispatch(closeModalPage(false))}
              positive
            />
          </Modal.Actions>
        </Modal>
      ))}
    </div>
  );
}
//Mapleyerek deil de backendde yazdıgın ResumeLanguage ResumeEducation gibi şeyleri tek tek çekerek de yapabilirsin hem kodları kısaltabilirsin bu yolla
