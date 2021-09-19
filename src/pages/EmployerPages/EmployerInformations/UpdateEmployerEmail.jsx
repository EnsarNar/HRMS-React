import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Icon } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import EmployerUpdateSchema from "../../../services/employerUpdateSchemaService";
import { toast } from "react-toastify";
export default function UpdateEmployerEmail({ employer }) {
  const initialValues = {
    email: "",
    id: employer.id,
  };

  const schema = Yup.object({
    email: Yup.string()
      .email("Lütfen email formatında email giriniz")
      .required("Bu kısım boş geçilemez"),
    id: Yup.number().required("Bu kısım boş geçilemez"),
  });

  let updateEmail = (values) => {
    let employerUpdateSchemaService = new EmployerUpdateSchema();
    employerUpdateSchemaService
      .addSchema(values.email, values.id)
      .then((result) => toast.success(result.data.message))
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          //updateEmail(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoInput name="email" placeholder="Yeni bir E-Mail" />
          <Button className="save-button" type="submit">
            <Icon name="check" />
            Kaydet
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
