import { ErrorMessage, Field } from "formik";
import styles from "./SelectInput.module.css";
import InputMessage from "./InputMessage";

function SelectInput({ label, options, name, ...props }) {
  return (
    <div className={styles.select}>
      <label className="fs-small-text" htmlFor={name}>
        {label}
      </label>
      <Field name={name} as="select" {...props}>
        <option value={null} label="Select an option" />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => <InputMessage message={msg} type="error" />}
      </ErrorMessage>
    </div>
  );
}

export default SelectInput;
