import styles from "./BillingForm.module.css";

import TextInput from "./TextInput";
import Heading from "./Heading";
import { Formik, Form } from "formik";
import ItemList from "./ItemList";
import Button from "./Button";

function BillingForm() {
  console.log(new Date());
  return (
    <Formik
      className={styles.form}
      initialValues={{ date: null }}
      onSubmit={(values) => console.log(values.date)}
    >
      <Form className={styles.form}>
        <Heading text="Create Invoice" />
        <h3>Bill from</h3>
        <TextInput label="Street Address" name="street" type="text" />
        <div className={styles.formGroup}>
          <TextInput label="City" name="city" type="text" />
          <TextInput label="Post Code" name="postCode" type="text" />
          <TextInput label="Country" name="country" type="text" />
        </div>

        <h3>Bill to</h3>
        <TextInput label="Clinet's Name" name="street" type="text" />
        <TextInput label="Client's Email" name="city" type="text" />
        <TextInput label="Street Address" name="postCode" type="text" />
        <div className={styles.formGroup}>
          <TextInput label="City" name="city" type="text" />
          <TextInput label="Post Code" name="postCode" type="text" />
          <TextInput label="Country" name="country" type="text" />
        </div>
        <TextInput label="Project desctiption" name="projectDesc" type="text" />
        <ItemList />

        <div className={styles.btnWrap}>
          <Button colorClass="btnSecondary" text="Cancel" />
          <Button colorClass="btnBlue" text="Save changes" />
        </div>
      </Form>
    </Formik>
  );
}

export default BillingForm;
