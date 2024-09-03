import styles from "./TextInput.module.css";
import { ErrorMessage, useField } from "formik";

const TextInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputWrap}>
      <label className="fs-small-text" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        type={type}
        autoComplete="true"
        id={props.name}
        className="fw-semi-bold fs-small-text"
        {...field}
        {...props}
      />
      <ErrorMessage name={props.name}>
        {(msg) => (
          <div className={`${styles.errorMessage} fs-small-text`}>{msg}</div>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
