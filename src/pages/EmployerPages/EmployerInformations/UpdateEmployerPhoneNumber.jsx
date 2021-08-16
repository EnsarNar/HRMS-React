import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Icon } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import EmployerService from "../../../services/employerService";
import { toast } from "react-toastify";
export default function UpdateEmployerPhoneNumber({ employer }) {
  const initialValues = {
    phoneNumber: "",
    id: employer.id,
  };
  const schema = Yup.object({
    phoneNumber: Yup.string().required("Bu kısım boş geçilemez"),
    id: Yup.number().required("Bu kısım boş geçilemez"),
  });
  let updatePhoneNumber = (values) => {
    let employerService = new EmployerService();
    employerService
      .updateEmployerPhoneNUumber(values.id, values.phoneNumber)
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
          updatePhoneNumber(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoInput name="phoneNumber" placeholder="Telefon numarası" />
          <Button type="submit" className="save-button">
            <Icon name="check" />
            Kaydet
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
