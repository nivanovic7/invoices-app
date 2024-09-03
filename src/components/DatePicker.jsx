import { Field } from "formik";
import styles from "./DatePicker.module.css";

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className={styles.datePicker}>
      <label className="fs-small-text" htmlFor="date">
        Invoice Date
      </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          console.log(value);
          return (
            <input
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
    </div>
  );
}

export default DatePicker;
