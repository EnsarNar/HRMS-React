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
import LanguageService from "../../../../services/languageService";
import ResumeLangugeService from "../../../../services/resumeLanguageService";
export default function UpdateResumeLanguageModal({ resumeId, id }) {
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
  };
  const schema = Yup.object({
    languageId: Yup.string().required("Bu kısım boş geçilemez"),
  });
  let handleRate = (e, { rating }) => {
    setRate({ rating });
  };
  let updateLanguage = (values) => {
    let resumeLanguageService = new ResumeLangugeService();
    resumeLanguageService
      .updateLanguage(values)
      .catch((err) => console.log(err.message));
    console.log("ÇALIŞTI");
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
        <Modal.Header>Dil Güncelleme Formu</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log("SUBMIT OLDU");
              values.resumeId = resumeId;
              values.id = id;
              values.grade = rate.rating;
              console.log(values);
              updateLanguage(values);
            }}
          >
            <Form className="ui form">
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top left"> Dil</Label>
                      <KodlamaIoInput as="select" name="languageId">
                        <option hidden>Yeni Bir Dil Seçiniz</option>
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
