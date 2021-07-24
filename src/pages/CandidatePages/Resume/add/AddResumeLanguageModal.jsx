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
  FormField,
} from "semantic-ui-react";
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import KodlamaIoRateInput from "../../../../utilities/customFormControls/KodlamaIoRateInput";
import { Formik, Form, Field } from "formik"; //Form
import * as Yup from "yup";
import ResumeLanguageService from "../../../../services/resumeLanguageService";
import LanguageService from "../../../../services/languageService";
export default function AddResumeLanguageModal({ resumeId }) {
  const [languages, setLanguages] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getAll()
      .then((result) => setLanguages(result.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  const initialValues = {
    languageId: "",
  };
  const schema = Yup.object({
    languageId: Yup.number().required("Bu kısım boş geçilemez"),
  });
  const [rate, setRate] = useState();

  let handleRate = (e, { rating }) => setRate({ rating });
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
                        <option selected hidden>
                          Dil Seçiniz
                        </option>
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
                      {/* <KodlamaIoRateInput
                        as="rate"
                        name="grade"
                        
                      /> */}
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
