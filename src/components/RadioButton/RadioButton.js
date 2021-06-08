import React from "react";
import { Field } from "formik";

function RadioButton(props) {
  const { value, label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Field name={name} {...rest}>
        <input type="radio" id={value} value={value} checked />
      </Field>
      {/* <ErrorMessage name={name} component={TextError} /> */}
    </div>
  );
}
export default RadioButton;
