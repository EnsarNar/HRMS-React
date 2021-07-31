import React, { useState, useEffect } from "react";

import {
  Button,
  Modal,
  Icon,
  Grid,
  Segment,
  Label,
  Divider,
  Rating,
  FormField,
} from "semantic-ui-react";
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import KodlamaIoRateInput from "../../../../utilities/customFormControls/KodlamaIoRateInput";
import { Formik, Form, Field } from "formik"; //Form
import * as Yup from "yup";
import ResumeLanguageService from "../../../../services/resumeLanguageService";
import LanguageService from "../../../../services/languageService";
export default function AddTechnologyModal() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button style={{ marginLeft: "48%" }} color="olive" icon="add" />
        }
      ></Modal>
    </div>
  );
}
