import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Icon } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import { addSchema } from "../../../store/actions/employerUpdateActions";
import { toast } from "react-toastify";

export default function UpdateEmployerPassword({ employer }) {
  const dispatch = useDispatch();

  const initialValues = {
    password: "",
    passwordRepeat: "",
    employerId: employer.id,
  };
  const schema = Yup.object({
    password: Yup.string().required("Bu kısım boş geçilemez"),
    passwordRepeat: Yup.string().required("Bu kısım boş geçilemez"),
    employerId: Yup.number().required("Bu kısım boş geçilemez"),
  });
  let updatePassword = (values) => {
    dispatch(addSchema(values));
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
