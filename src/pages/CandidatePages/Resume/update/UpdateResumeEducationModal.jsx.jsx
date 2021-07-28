import React, { useState } from "react";
import { Formik, Form } from "formik"; //Form
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import * as Yup from "yup";
import { Button, Grid, Segment, Label, Icon, Modal } from "semantic-ui-react";
export default function UpdateResumeEducationModal({ resumeId }) {
  const [open, setOpen] = useState(false);
  const initialValues = {
    schoolName: "",
    startingDate: "",
    graduateDate: "",
    departmentName: "",
  };
  const schema = Yup.object({
    schoolName: Yup.string(),
    startingDate: Yup.date(),
    graduateDate: Yup.date(),
    departmentName: Yup.string(),
  });

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
      >
        <Modal.Header>Eğitim Bilgisi Güncelleme Formu</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              values.resumeId = resumeId;
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
