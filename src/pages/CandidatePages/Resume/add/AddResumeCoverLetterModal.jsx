import React, { useState } from "react";
import {
  Button,
  Modal,
  Icon,
  Grid,
  Segment,
  Label,
  Divider,
} from "semantic-ui-react";
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import { Formik, Form } from "formik"; //Form
import * as Yup from "yup";
import ResumeEducationService from "../../../../services/resumeEducationService";

export default function AddResumeCoverLetterModal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            animated="vertical"
            style={{
              padding: "7px 7px",
              background: " linear-gradient(to right, #ffe000, #799f0c)",
            }}
          >
            <Button.Content visible style={{ paddingLeft: "1em" }}>
              Ekle
            </Button.Content>
            <Button.Content hidden>
              <Icon name="plus" />
            </Button.Content>
          </Button>
        }
      ></Modal>
    </div>
  );
}
