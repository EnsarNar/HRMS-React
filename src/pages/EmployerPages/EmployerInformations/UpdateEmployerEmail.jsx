import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import EmployerService from "../../../services/employerService";
import { toast } from "react-toastify";
export default function UpdateEmployerEmail({ employer }) {
  const initialValues = {
    email: employer.email,
    companyName: employer.companyName,
    password: employer.password,
    password_repeat: employer.password_repeat,
    phoneNumber: employer.phoneNumber,
    webAdress: employer.webAdress,
    id: employer.id,
  };

  const schema = Yup.object({
    email: Yup.string()
      .email("Lütfen email formatında email giriniz")
      .required("Bu kısım boş geçilemez"),
    companyName: Yup.string().required("Bu kısım boş geçilemez"),
    password: Yup.string().required("Bu kısım boş geçilemez"),
    password_repeat: Yup.string().required("Bu kısım boş geçilemez"),
    phoneNumber: Yup.string().required("Bu kısım boş geçilemez"),
    webAdress: Yup.string().required("Bu kısım boş geçilemez"),
    id: Yup.number().required("Bu kısım boş geçilemez"),
  });
  let updateEmail = (values) => {
    let employerService = new EmployerService();
    employerService
      .updatEmployer(values)
      .then((result) => toast.success(result.data.message))
      .catch((data) => toast.error(data.message));
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
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
