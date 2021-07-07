import { useField } from "formik";
import React from "react";
import { Form } from "semantic-ui-react";

export default function KodlamaIoFilter({
  onChange,
  value,
  placeholder,
  label,
  options,
  onChangeForCheckbox,
  list,
}) {
  return (
    <div>
      <Form.Field
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        label={label}
      />
      <div
        style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
      >
        {options.map((option) => (
          <Form.Checkbox
            onChange={(e, { value }) => onChangeForCheckbox(e, value)}
            key={option.key}
            label={option.text}
            value={option.value}
            checked={list.includes(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
// <Form.Field
//         placeholder="Şehre göre filtrele"
//         value={selectedCity}
//         onChange={(e) => setSelectedCity(e.target.value)}
//         label="Şehre göre filtrele"
//       />
//        <div
//         style={{ overflowY: "auto", maxHeight: "200px", margin: "10px 10px" }}
//       >
//         {cityOptions.map((option) => (
//           <Form.Checkbox
//             onChange={(e, { value }) => {
//               formik.setFieldValue(
//                 "cityId",
//                 formik.values.cityId.includes(value)
//                   ? [...formik.values.cityId.filter((i) => i !== value)]
//                   : [...formik.values.cityId, value]
//               );
//             }}
//             key={option.key}
//             checked={formik.values.cityId.includes(option.value)}
//             label={option.text}
//             value={option.value}
//           />
//         ))}
//       </div>
//---------------------------------------------
//   <KodlamaIoFilter
//   placeholder="Şehre göre filtrele"
//   value={selectedCity}
//   onChange={(e) => setSelectedCity(e.target.value)}
//   label="Şehre göre filtrele"
//   options={cityOptions}
//   onChangeForCheckbox={cityOnChange}
//   list={formik.values.cityId}
// />
//---------------------------------------------
// const generalOnChange = (value, field, list) => {
//   formik.setFieldValue(
//     field,
//     list.includes(value)
//       ? [...list.filter((i) => i !== value)]
//       : [...list, value]
//   );
// };
// const cityOnChange = (e, value) => {
//   generalOnChange(value, "cityId", formik.values.cityId);
// };
