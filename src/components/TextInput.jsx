import styles from "./TextInput.module.css";
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputWrap}>
      <label className="fs-small-text" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="fw-semi-bold fs-small-text" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
