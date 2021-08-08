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
import { Formik, Form } from "formik"; //Form
import * as Yup from "yup";
import ResumeLanguageService from "../../../../services/resumeLanguageService";
import LanguageService from "../../../../services/languageService";
export default function AddResumeLanguageModal({ resumeId }) {
  const [languages, setLanguages] = useState([]);
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState();
  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getAll()
      .then((result) => setLanguages(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  const initialValues = {
    languageId: "",
    // grade: "",
  };
  const schema = Yup.object({
    languageId: Yup.number().required("Bu kısım boş geçilemez"),
    // grade: Yup.number().required("Bu kısım boş geçilemez"),
  });

  let handleRate = (e, { rating }) => {
    setRate({ rating });
  };
  let addLanguageToDatabase = (values) => {
    let resumeLanguageService = new ResumeLanguageService();
    resumeLanguageService
      .addLanguage(values)
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      {console.log(rate)}
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
        <Modal.Header>Dil Ekleme Formu</Modal.Header>
        <Modal.Content>
          <Grid columns="equal" divided>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h3>Dil Bilgisi !</h3>
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
              addLanguageToDatabase(values);
              console.log(values);
            }}
          >
            <Form className="ui form">
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left">Dİller</Label>
                      <KodlamaIoInput as="select" name="languageId">
                        <option hidden>Dil Seçiniz</option>
                        {languages.map((language) => (
                          <option key={language.id} value={language.id}>
                            {language.languageName}
                          </option>
                        ))}
                      </KodlamaIoInput>
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
