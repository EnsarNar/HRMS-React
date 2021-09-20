import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Icon } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import { addSchema } from "../../../store/actions/employerUpdateActions";
import { toast } from "react-toastify";
export default function UpdateEmployerEmail({ employer }) {
  const dispatch = useDispatch();
  const employerUpdateSchemas = useSelector(
    (state) => state.schemas.employerUpdateSchemas
  );

  const initialValues = {
    email: "",
    employerId: employer.id,
  };

  const schema = Yup.object({
    email: Yup.string()
      .email("Lütfen email formatında email giriniz")
      .required("Bu kısım boş geçilemez"),
    employerId: Yup.number().required("Bu kısım boş geçilemez"),
  });

  let handleUpdate = (shema) => {
    dispatch(addSchema(shema));
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);

          handleUpdate(values);
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
