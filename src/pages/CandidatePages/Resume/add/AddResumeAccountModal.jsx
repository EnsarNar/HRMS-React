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
import { Formik, Form, Field } from "formik"; //Form
import * as yup from "yup";
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import ResumeAccountService from "../../../../services/resumeAccountService";
export default function AddResumeAccountModal({ resumeId }) {
  const [open, setOpen] = useState(false);
  const initialValues = {
    github: "",
    linkedin: "",
  };

  const schema = yup.object({
    github: yup.string().url("Lütfen geçerli bir Github hesabı giriniz"),
    linkedin: yup.string().url("Lütfen geçerli bir Linkedin hesabı giriniz"),
  });

  let addAccountToDatabase = (values) => {
    let resumeAccountService = new ResumeAccountService();
    resumeAccountService
      .addAccount(values)
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
        <Modal.Header>Hesap Ekleme Formu !</Modal.Header>
        <Modal.Content>
          <Grid columns="equal" divided>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h3>Hesap Ekle !</h3>
                <Divider />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              values.resumeId = resumeId;
              addAccountToDatabase(values);
              console.log(values);
            }}
          >
            <Form className="ui form">
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top" color="black">
                        <Icon name="github" />
                        Github
                      </Label>
                      <KodlamaIoInput name="github" placeholder="github" />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top" color="blue">
                        <Icon name="linkedin" />
                        Linkedin
                      </Label>
                      <KodlamaIoInput name="linkedin" placeholder="linkedin" />
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
