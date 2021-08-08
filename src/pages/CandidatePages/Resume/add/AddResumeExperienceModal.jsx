import React, { useState } from "react";
import {
  Modal,
  Button,
  Grid,
  Divider,
  Segment,
  Label,
  Icon,
} from "semantic-ui-react";
import { Formik, Form } from "formik"; //Form
import * as yup from "yup";
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import ResumeExperienceService from "../../../../services/resumeExperienceService";
export default function AddResumeExperienceModal({ resumeId }) {
  const [open, setOpen] = useState(false);
  const initialValues = {
    companyName: "",
    endDate: "",
    position: "",
    startDate: "",
  };
  const schema = yup.object({
    companyName: yup.string().required("Bu kısım boi geçilemez"),
    endDate: yup.date(),
    position: yup.string().required("Bu kısım boi geçilemez"),
    startDate: yup.date().required("Bu kısım boi geçilemez"),
  });
  let addExperienceToDatabase = (values) => {
    let resumeExperienceService = new ResumeExperienceService();
    resumeExperienceService
      .addExperience(values)
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
      >
        <Modal.Header>İş Tecrübesi Ekleme Formu</Modal.Header>
        <Modal.Content>
          <Grid columns="equal" divided>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h3>Eğitim Bilgisi Ekle !</h3>
                <Divider />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              values.resumeId = resumeId;
              addExperienceToDatabase(values);
              console.log(values);
            }}
          >
            <Form className="ui form">
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Compamny Name</Label>
                      <KodlamaIoInput
                        name="companyName"
                        placeholder="companyName"
                      />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Position</Label>
                      <KodlamaIoInput name="position" placeholder="position" />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Start Date</Label>
                      <KodlamaIoInput
                        name="startDate"
                        type="date"
                        placeholder="startDate"
                      />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">End Date</Label>
                      <KodlamaIoInput
                        name="endDate"
                        type="date"
                        placeholder="endDate"
                      />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <div style={{ marginLeft: "45em", marginTop: "3em" }}>
                <Button
                  icon="window close"
                  onClick={() => setOpen(false)}
                  content="çık"
                  color="red"
                />
                <Button
                  icon="checkmark"
                  content="Ekle"
                  // onClick={() => setOpen(false)}
                  positive
                  type="submit"
                />
              </div>
            </Form>
          </Formik>
        </Modal.Content>
      </Modal>
    </div>
  );
}
