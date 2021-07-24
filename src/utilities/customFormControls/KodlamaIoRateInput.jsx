import React from "react";
import { useField } from "formik";
import { FormField, Rating } from "semantic-ui-react";

export default function KodlamaIoRateInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <Rating {...field} {...props} />
      </FormField>
    </div>
  );
}
