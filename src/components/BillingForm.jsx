import styles from "./BillingForm.module.css";

import TextInput from "./TextInput";
import Heading from "./Heading";
import { Formik, Form } from "formik";
import ItemList from "./ItemList";
import Button from "./Button";
import { useInvoices } from "../contexts/InvoiceContext";

// id: uuidv4(),
// status: "draft",
// date: "Aug 18 2023",
// paymentTerms: "Net 30 days",
// sender: {
//   street: "cara dusana",
//   city: "banjaluka",
//   postCode: 78000,
//   country: "BiH",
// },
// client: {
//   name: "nikola invaonvic",
//   email: "nikola@gmial.com",
//   street: "cara lazara",
//   city: "nevesinje",
//   postCode: 88289,
//   country: "BiH",
// },
// projectDescription: "It job",

function BillingForm() {
  const { selectedInvoice, dispatch } = useInvoices();
  return (
    <Formik
      className={styles.form}
      initialValues={selectedInvoice}
      onSubmit={(values) => console.log(values.date)}
    >
      <Form className={styles.form}>
        <Heading text="Create Invoice" />
        <h3>Bill from</h3>
        <TextInput label="Street Address" name="sender.street" type="text" />
        <div className={styles.formGroup}>
          <TextInput label="City" name="sender.city" type="text" />
          <TextInput label="Post Code" name="sender.postCode" type="text" />
          <TextInput label="Country" name="sender.country" type="text" />
        </div>

        <h3>Bill to</h3>
        <TextInput label="Clinet's Name" name="sender.street" type="text" />
        <TextInput label="Client's Email" name="sender.email" type="text" />
        <TextInput label="Street Address" name="sender.address" type="text" />
        <div className={styles.formGroup}>
          <TextInput label="City" name="client.city" type="text" />
          <TextInput label="Post Code" name="client.postCode" type="text" />
          <TextInput label="Country" name="client.country" type="text" />
        </div>
        <TextInput
          label="Project desctiption"
          name="projectDescription"
          type="text"
        />
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
