import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import EmployerService from "../../../services/employerService";
import { toast } from "react-toastify";
import { update } from "lodash";
export default function UpdateEmployerEmail({ employer }) {
  const initialValues = {
    email: "",
    companyName: employer.companyName,
    password: employer.password,
    password_repeat: employer.password_repeat,
    phoneNumber: employer.phoneNumber,
    webAdress: employer.webAdress,
    id: employer.id
  };





  const schema = Yup.object({
    email: Yup.string()
      .email("Lütfen geçerli bir email giriniz")
      .required("Bu kısım boş geçilemez"),
  });
  let updateEmail = (values) => {
    let employerService = new EmployerService();
    employerService
      .updatEmployer(values)
      .then((result) => toast.success("Tebrikler ! Güncelleme işlemi başarılı"))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        schema={schema}
        onSubmit={(values) => {
          updateEmail(values);
          console.log(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoInput name="email" placeholder="Yeni bir E-Mail" />
          <Button className="save-button" type="submit">
            Kaydet
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
