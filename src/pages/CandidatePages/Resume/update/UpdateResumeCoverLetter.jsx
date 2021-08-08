import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Grid, Segment, Button, Icon } from "semantic-ui-react";
import KodlamaIoTextInputForTextArea from "../../../../utilities/customFormControls/KodlamaIoTextInputForTextArea";
import ResumeCoverLetterService from "../../../../services/resumeCoverLetterService";
import { toast } from "react-toastify";
export default function UpdateResumeCoverLetter(
  props
  // { resumeId, coverLetter }
) {
  const initialValues = {
    coverLetter: "",
  };
  const schema = Yup.object({
    coverLetter: Yup.string().required("Bu kısım boş geçilemez"),
  });
  let updateCoverLetter = (values) => {
    let resumeCoverLetterService = new ResumeCoverLetterService();
    resumeCoverLetterService
      .updateCoverLetter(values)
      .then(() => toast.success("Güncelleme İşlemi Başarılı"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      {console.log(props.coverLetter)}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          values.resumeId = props.resumeId;
          values.id = props.coverLetter.id;
          updateCoverLetter(values);
          console.log(values);
          props.changeIsActive(false);
        }}
      >
        <Form className="ui form">
          <Button
            animated="vertical"
            type="submit"
            color="instagram"
            style={{ marginBottom: "0.3em", padding: "7px 7px" }}
          >
            <Button.Content hidden>
              <Icon name="upload" />
            </Button.Content>
            <Button.Content visible style={{ paddingLeft: "1em" }}>
              Kaydet
            </Button.Content>
          </Button>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <KodlamaIoTextInputForTextArea name="coverLetter" />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}
