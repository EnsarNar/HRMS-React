import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Icon } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import EmployerService from "../../../services/employerService";
import { toast } from "react-toastify";

export default function UpdateEmployerPassword({ employer }) {
  const initialValues = {
    password: "",
    passwordRepeat: "",
    id: employer.id,
  };
  const schema = Yup.object({
    password: Yup.string().required("Bu kısım boş geçilemez"),
    passwordRepeat: Yup.string().required("Bu kısım boş geçilemez"),
    id: Yup.number().required("Bu kısım boş geçilemez"),
  });
  let updatePassword = (values) => {
    let employerService = new EmployerService();
    employerService
      .updateEmployerPassword(values.id, values.password, values.passwordRepeat)
      .then((result) => toast.success("İşlem Başarılı"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          updatePassword(values);
          console.log(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoInput name="password" placeholder="Şifre" />
          <KodlamaIoInput name="passwordRepeat" placeholder="Şifre tekrarı" />
          <Button type="submit" className="save-button">
            <Icon name="check" />
            Kaydet
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
