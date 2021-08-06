import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik"; //Form
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import * as Yup from "yup";
import {
  Button,
  Grid,
  Segment,
  Label,
  Icon,
  Modal,
  Rating,
} from "semantic-ui-react";
import { toast } from "react-toastify";
import ResumeTechnologyService from "../../../../services/resumeTechnologyService";
export default function UpdateResumeTechnologiesModal({
  resumeId,
  technology,
}) {
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState();
  const initialValues = {
    grade: technology.grade,
    id: technology.id,
    programmingLanguageName: technology.programmingLanguageName,
    resumeId: resumeId,
  };
  const schema = Yup.object({
    // grade: Yup.number().required("Bu kısım boş geçilemez"),
    // id: Yup.number().required("Bu kısım boş geçilemez"),
    // programmingLanguageName: Yup.string().required("Bu kısım boş geçilemez"),
    // resumeId: Yup.number().required("Bu kısım boş geçilemez"),
  });
  let handleRate = (e, { rating }) => {
    setRate({ rating });
  };
  let updateTechnology = (values) => {
    let resumeTechnologyService = new ResumeTechnologyService();
    resumeTechnologyService
      .updateTechnology(values)
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button color="green" style={{ padding: "7px 7px" }}>
            <Icon name="pencil" />
            Güncelle
          </Button>
        }
      >
        <Modal.Header>Teknoloji Güncelleme Formu</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              values.resumeId = resumeId;
              values.grade = rate.rating;
              console.log(values);
              updateTechnology(values);
            }}
          >
            <Form className="ui form">
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Teknoloji</Label>
                      <KodlamaIoInput name="programmingLanguageName" />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Seviye</Label>
                      <Rating
                        maxRating={5}
                        defaultRating={1}
                        icon="star"
                        size="massive"
                        onRate={(e, { rating }) => handleRate(e, { rating })}
                      />
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
