import React, { useState } from "react";
import { Formik, Form } from "formik"; //Form
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import * as Yup from "yup";
import { Button, Grid, Segment, Label, Icon, Modal } from "semantic-ui-react";
export default function UpdateResmeExperienceModal() {
  const [open, setOpen] = useState(false);
  const initialValues = {};
  const schema = Yup.object({});
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button color="green">
            <Icon name="pencil" />
            Güncelle
          </Button>
        }
      ></Modal>
    </div>
  );
}
