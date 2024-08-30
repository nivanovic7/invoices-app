import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useField, useFormikContext } from "formik";

function MyDatePicker({ name, ...props }) {
  console.log(props.field.name);
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props.field.name);

  const handleChange = (date) => {
    setFieldValue(name, date);
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          {...props}
          name={props.field.name}
          value={field.value}
          onChange={handleChange}
        />
      </LocalizationProvider>
    </div>
  );
}

export default MyDatePicker;
