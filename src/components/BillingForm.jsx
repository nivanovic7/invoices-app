import styles from "./BillingForm.module.css";
import { Field, Form, Formik } from "formik";

import TextInput from "./TextInput";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "formik-mui-x-date-pickers";
import { TextField, styled } from "@mui/material";

import dayjs from "dayjs";
import Heading from "./Heading";

const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "lightblue", // Customize your background color here
  // Add additional styles if needed
}));

function BillingForm() {
  console.log(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Formik
        className={styles.form}
        initialValues={{ date: null }}
        onSubmit={(values) => console.log(values.date)}
      >
        <Form className={styles.form}>
          <Heading text="Create Invoice" />
          <h3>Bill from</h3>
          <TextInput label="Street Address" name="street" type="text" />
          <TextInput label="City" name="city" type="text" />
          <TextInput label="Post Code" name="postCode" type="text" />
          <TextInput label="Country" name="country" type="text" />

          <h3>Bill to</h3>
          <TextInput label="Clinet's Name" name="street" type="text" />
          <TextInput label="Client's Email" name="city" type="text" />
          <TextInput label="Street Address" name="postCode" type="text" />
          <TextInput label="City" name="city" type="text" />
          <TextInput label="Post Code" name="postCode" type="text" />
          <TextInput label="Country" name="country" type="text" />

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </LocalizationProvider>
  );
}

export default BillingForm;
