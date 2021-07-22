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
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>tıkla</Button>}
      >
        <ModalContent>dwkafk</ModalContent>
      </Modal>
    </div>
  );
}
//Mapleyerek deil de backendde yazdıgın ResumeLanguage ResumeEducation gibi şeyleri tek tek çekerek de yapabilirsin hem kodları kısaltabilirsin bu yolla
