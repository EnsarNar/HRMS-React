import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Button, Icon } from "semantic-ui-react";
import KodlamaIoInput from "../../../utilities/customFormControls/KodlamaIoInput";
import { addSchema } from "../../../store/actions/employerUpdateActions";
import { toast } from "react-toastify";
export default function UpdateEmployerWebAdress({ employer }) {
  const dispatch = useDispatch();
  const initialValues = {
    webAdress: "",
    employerId: employer.id,
  };
  const schema = Yup.object({
    webAdress: Yup.string().required("Bu kısım boş geçilemez"),
    employerId: Yup.number().required("Bu kısım boş geçilemez"),
  });
  let updateWebAdress = (values) => {
    dispatch(addSchema(values));
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
