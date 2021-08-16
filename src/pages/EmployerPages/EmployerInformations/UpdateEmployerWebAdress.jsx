import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Icon } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import EmployerService from "../../../services/employerService";
import { toast } from "react-toastify";
export default function UpdateEmployerWebAdress({ employer }) {
  const initialValues = {
    webAdress: "",
    id: employer.id,
  };
  const schema = Yup.object({
    webAdress: Yup.string().required("Bu kısım boş geçilemez"),
    id: Yup.number().required("Bu kısım boş geçilemez"),
  });
  let updateWebAdress = (values) => {
    let employerService = new EmployerService();
    employerService
      .updateEmployerWebAdress(values.id, values.webAdress)
      .then((result) => toast.success("İşlem Başarılı"))
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          updateWebAdress(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoInput name="webAdress" placeholder="Web sitesi" />
          <Button type="submit" className="save-button">
            <Icon name="check" />
            Kaydet
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
