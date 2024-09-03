import { ErrorMessage, Field } from "formik";
import styles from "./SelectInput.module.css";

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
      <ErrorMessage
        name={name}
        component="div"
        className={`${styles.error} fs-small-text`}
      />
    </div>
  );
}

export default SelectInput;
