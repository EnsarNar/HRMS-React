import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Button, Icon } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import { addSchema } from "../../../store/actions/employerUpdateActions";
import { toast } from "react-toastify";
export default function UpdateEmployerPhoneNumber({ employer }) {
  const dispatch = useDispatch();

  const initialValues = {
    phoneNumber: "",
    employerId: employer.id,
  };
  const schema = Yup.object({
    phoneNumber: Yup.string().required("Bu kısım boş geçilemez"),
    employerId: Yup.number().required("Bu kısım boş geçilemez"),
  });
  let updatePhoneNumber = (values) => {
    dispatch(addSchema(values));
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
