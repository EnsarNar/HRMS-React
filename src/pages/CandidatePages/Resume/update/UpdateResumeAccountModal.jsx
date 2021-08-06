import React, { useState } from "react";
import { Formik, Form } from "formik"; //Form
import KodlamaIoInput from "../../../../utilities/customFormControls/KodlamaIoInput";
import * as Yup from "yup";
import { Button, Grid, Segment, Label, Icon, Modal } from "semantic-ui-react";
import ResumeAccountService from "../../../../services/resumeAccountService";
import { toast } from "react-toastify";
import { values } from "lodash";
export default function UpdateResumeAccountModal({ resumeId, account }) {
  const initialValues = {
    github: account.github,
    linkedin: account.linkedin,
  };
  const schema = Yup.object({
    github: Yup.string().url("Lütfen geçerli bir github hesabı giriniz"),
    linkedin: Yup.string().url("Lütfen geçerli bir linkedin hesabı giriniz"),
  });
  let updateAccount = (values) => {
    let resumeAccountService = new ResumeAccountService();
    resumeAccountService
      .updateAccount(values)
      .then((result) => toast.success("İşlem Başarılı"))
      .catch((err) => console.log(err.message));
  };
  const [open, setOpen] = useState(false);
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
        <Modal.Header>Hesap Bilgisi Güncelleme Formu !</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              values.resumeId = resumeId;
              values.id = account.id;
              updateAccount(values);
              console.log(values);
            }}
          >
            <Form className="ui form">
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top" color="black">
                        <Icon name="github" />
                        Github
                      </Label>
                      <KodlamaIoInput name="github" />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <Label attached="top" color="blue">
                        <Icon name="linkedin" />
                        Linkedin
                      </Label>
                      <KodlamaIoInput name="linkedin" />
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
