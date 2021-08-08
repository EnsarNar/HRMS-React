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
} from "semantic-ui-react";
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import ResumeTechnologyService from "../../../../services/resumeTechnologyService";
import { Formik, Form } from "formik"; //Form
import * as Yup from "yup";

export default function AddResumeTechnologyModal({ resumeId }) {
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState();
  const initialValues = {
    programmingLanguageName: "",
  };
  const schema = Yup.object({
    programmingLanguageName: Yup.string().required("Bu kısım boş geçilemez"),
  });

  let addTechnologyToDatabase = (values) => {
    let resumeTechnologyService = new ResumeTechnologyService();
    resumeTechnologyService
      .addTechnology(values)
      .catch((err) => console.log(err.message));
  };
  let handleRate = (e, { rating }) => {
    setRate({ rating });
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
        <Modal.Header>Teknoloji Ekleme Formu</Modal.Header>
        <Modal.Content>
          <Grid columns="equal" divided>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h3>Teknoloji Bilgisi !</h3>
                <Divider />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              values.resumeId = resumeId;
              values.grade = rate.rating;
              console.log(values);
              addTechnologyToDatabase(values);
            }}
          >
            <Form className="ui form">
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left"> Teknoloji</Label>
                      <KodlamaIoInput
                        name="programmingLanguageName"
                        placeholder="Teknoloji Adı"
                      />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left"> Seviye</Label>
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
