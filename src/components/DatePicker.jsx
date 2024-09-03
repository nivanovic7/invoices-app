import { ErrorMessage, Field } from "formik";
import styles from "./DatePicker.module.css";

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className={styles.datePicker}>
      <label className="fs-small-text" htmlFor="date">
        {label}
      </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <input
              max={new Date().toISOString().split("T")[0]}
              {...field}
              {...rest}
              type="date"
              id={name}
              value={value}
              onChange={(e) => {
                setFieldValue(name, e.target.value);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className={`${styles.error} fs-small-text`}
      />
    </div>
  );
}

export default DatePicker;
