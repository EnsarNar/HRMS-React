import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import KodlamaIoTextInput from "../../utilities/customFormControls/KodlamaIoTextInput";
import { Container, Button, TextArea } from "semantic-ui-react";
import KodlamaIoTextInputForTextArea from "../../utilities/customFormControls/KodlamaIoTextInputForTextArea";
export default function CompulsoryResumeAdd() {
  const initialValues = {
    coverLetter: "",
    profilePictureUrl: "",
    candidateFirstName: "",
    candidateLastName: "",
  };
  const schema = Yup.object({
    coverLetter: Yup.string().required("Bu kısım boş geçilemez"),
    profilePictureUrl: Yup.string().required("Bu kısım boş geçilemez"),
    candidateFirstName: Yup.string().required("Bu kısım boş geçilemez"),
    candidateLastName: Yup.string().required("Bu kısım boş geçilemez"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Container>
          <Form className="ui form">
            <KodlamaIoTextInput
              name="candidateFirstName"
              placeholder="candidateFirstName"
            />
            <div className="ui inverted divider"></div>

            <KodlamaIoTextInput
              name="candidateLastName"
              placeholder="candidateLastName"
            />
            <div className="ui inverted divider"></div>

            <KodlamaIoTextInputForTextArea
              name="coverLetter"
              placeholder="coverLetter"
              style={{ minHeight: 100 }}
            ></KodlamaIoTextInputForTextArea>
            <div className="ui inverted divider"></div>

            <Button color="green" type="submit">
              Ekle
            </Button>
          </Form>
        </Container>
      </Formik>
    </div>
  );
}
