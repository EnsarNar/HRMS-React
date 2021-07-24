import React, { useState } from "react";
import {
  Button,
  Modal,
  Icon,
  Grid,
  Segment,
  Label,
  Divider,
  Container,
} from "semantic-ui-react";
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import { Formik, Form } from "formik"; //Form
import * as Yup from "yup";
import ResumeEducationService from "../../../../services/resumeEducationService";

export default function AddResumeEducationModal({ resumeId }) {
  const [open, setOpen] = useState(false);

  const initialValues = {
    schoolName: "",
    startingDate: "",
    graduateDate: "",
    departmentName: "",
  };
  const schema = Yup.object({
    schoolName: Yup.string().required("Bu kısım boş geçilemez."),
    startingDate: Yup.date().required("Bu kısım boş geçilemez."),
    graduateDate: Yup.date(),
    departmentName: Yup.string().required("Bu kısım boş geçilemez."),
  });
  let addToDatabase = (values) => {
    let resumeEducationService = new ResumeEducationService();
    resumeEducationService
      .addEducation(values)
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button style={{ marginLeft: "48%" }} color="olive" icon="add" />
        }
      >
        <Modal.Header>Eğitim Bilgisi Ekleme Formu</Modal.Header>
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
              addToDatabase(values);
              console.log(values);
            }}
          >
            <Form className="ui form">
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Okul</Label>
                      <KodlamaIoInput
                        name="schoolName"
                        placeholder="schoolName"
                      />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Bölüm</Label>
                      <KodlamaIoInput
                        name="departmentName"
                        placeholder="departmentName"
                      />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Okula Başlama Tarihi</Label>
                      <KodlamaIoInput
                        name="startingDate"
                        placeholder="startingDate"
                        type="date"
                      />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Mezuniyet Tarihi</Label>
                      <KodlamaIoInput
                        name="graduateDate"
                        placeholder="graduateDate"
                        type="date"
                      />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <div style={{ marginLeft: "45em", marginTop: "3em" }}>
                <Button color="red" onClick={() => setOpen(false)}>
                  <Icon name="window close" />
                  Çık
                </Button>
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
