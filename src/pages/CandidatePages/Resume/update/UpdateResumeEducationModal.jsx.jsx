import React, { useState } from "react";
import { Formik, Form } from "formik"; //Form
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import * as Yup from "yup";
import { Button, Grid, Segment, Label, Icon, Modal } from "semantic-ui-react";
// import ResumeEducationService from "../../../../services/resumeEducationService";
import DenemeService from "../../../../services/denemeService";
import { toast } from "react-toastify";
export default function UpdateResumeEducationModal({ education, resumeId }) {
  const [open, setOpen] = useState(false);
  const initialValues = {
    schoolName: education.schoolName,
    startingDate: education.startingDate,
    graduateDate: education.graduateDate,
    departmentName: education.departmentName,
    id: education.id,
    resumeId: resumeId,
  };
  const schema = Yup.object({
    schoolName: Yup.string(),
    startingDate: Yup.date(),
    graduateDate: Yup.date(),
    departmentName: Yup.string(),
  });
  let updateHandler = (values) => {
    let denemeService = new DenemeService();
    denemeService
      .updateEducation(values)
      .then((result) => toast.success(result.data.message))
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        dimmer="blurring"
        trigger={
          <Button color="green" style={{ padding: "7px 7px" }}>
            <Icon name="pencil" />
            Güncelle
          </Button>
        }
      >
        <Modal.Header>Eğitim Bilgisi Güncelleme Formu</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              updateHandler(values);
              console.log(values);
              setOpen(false);
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
                        placeholder="Yeni Okul Adı"
                      />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Bölüm</Label>
                      <KodlamaIoInput
                        name="departmentName"
                        placeholder="Yeni Bölüm Adı"
                      />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Okula Başlama Tarihi</Label>
                      <KodlamaIoInput name="startingDate" type="date" />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Mezuniyet Tarihi</Label>
                      <KodlamaIoInput name="graduateDate" type="date" />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <div style={{ marginLeft: "40em", marginTop: "3em" }}>
                <Button color="red" onClick={() => setOpen(false)}>
                  <Icon name="window close" />
                  Çık
                </Button>
                <Button
                  icon="pencil"
                  content="Güncelle"
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
