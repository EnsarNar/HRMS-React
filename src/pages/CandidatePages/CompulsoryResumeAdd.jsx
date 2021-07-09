import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import KodlamaIoTextInput from "../../utilities/customFormControls/KodlamaIoTextInput";
import { Container, Button, Label, FormField } from "semantic-ui-react";
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
      <h2>CV Ekleme Formu</h2>

      <Formik
        className="main"
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {/* <Container> */}
        {(formProps) => (
          <Form className="ui form">
            <input
              name="profilePictureUrl"
              type="file"
              id="file"
              onChange={formProps.handleChange("profilePictureUrl")}
            />
            <div className="ui inverted divider"></div>

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
            />
            <div className="ui inverted divider"></div>
            <Button.Group>
              <Button color="red">Geri</Button>
              <Button.Or text="or" />
              <Button color="green" type="submit">
                İleri
              </Button>
            </Button.Group>
          </Form>
        )}
        {/* <Form className="ui form">
            

            <div className="ui inverted divider"></div>

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
            <div>
              <Button.Group>
                <Button color="red">Geri</Button>
                <Button.Or text="or" />
                <Button color="green" type="submit">
                  İleri
                </Button>
              </Button.Group>
            </div>
          </Form> */}
        {/* </Container> */}
      </Formik>
    </div>
  );
}
