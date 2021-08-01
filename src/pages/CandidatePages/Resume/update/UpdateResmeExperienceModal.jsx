import React, { useState } from "react";
import { Formik, Form } from "formik"; //Form
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import * as Yup from "yup";
import { Button, Grid, Segment, Label, Icon, Modal } from "semantic-ui-react";
import ResumeExperienceService from "../../../../services/resumeExperienceService";
import { toast } from "react-toastify";

export default function UpdateResmeExperienceModal({ resumeId, experience }) {
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState([]);

  const initialValues = {
    companyName: experience.companyName,
    endDate: experience.endDate,
    position: experience.position,
    startDate: experience.startDate,
    id: experience.id,
    resumeId: resumeId,
  };
  const schema = Yup.object({
    companyName: Yup.string().required("Bu kısım boi geçilemez"),
    endDate: Yup.date(),
    position: Yup.string().required("Bu kısım boi geçilemez"),
    startDate: Yup.date().required("Bu kısım boi geçilemez"),
  });
  let updateExperienceHandler = (values) => {
    let resumeExperienceService = new ResumeExperienceService();
    resumeExperienceService
      .updateExperience(values)
      .then((result) => toast.success(result.data.message))
      .catch((err) => console.log(err.message));
  };
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
        <Modal.Header>İş Tecrübesi Güncelleme Formu</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
              updateExperienceHandler(values);
            }}
          >
            <Form className="ui form">
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left"> Şirket Adı</Label>
                      <KodlamaIoInput name="companyName" />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Pozisyon</Label>
                      <KodlamaIoInput name="position" />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">İşe Başlama Tarihi</Label>
                      <KodlamaIoInput name="startDate" type="date" />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">İşten Ayrılma Tarihi</Label>
                      <KodlamaIoInput name="endDate" type="date" />
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
