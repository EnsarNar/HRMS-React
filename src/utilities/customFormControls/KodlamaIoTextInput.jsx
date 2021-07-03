import React from "react";
import { useField } from "formik";
import { FormField } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
export default function KodlamaIoTextInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
    </div>
  );
}
