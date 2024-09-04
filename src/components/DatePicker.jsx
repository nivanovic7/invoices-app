import { ErrorMessage, Field } from "formik";
import styles from "./DatePicker.module.css";
import InputMessage from "./InputMessage";

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
      <ErrorMessage name={props.name}>
        {(msg) => <InputMessage message={msg} type="error" />}
      </ErrorMessage>
    </div>
  );
}

export default DatePicker;
