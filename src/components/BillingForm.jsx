import styles from "./BillingForm.module.css";

import { Formik, Form } from "formik";
import TextInput from "./TextInput";
import Heading from "./Heading";
import ItemList from "./ItemList";
import Button from "./Button";
import { useInvoices } from "../contexts/InvoiceContext";
import { emptyInvoice, paymentTermsOptions } from "../config";
import { validationSchema } from "../helpers/helperFunctions";
import DatePicker from "./DatePicker";
import SelectInput from "./SelectInput";

function BillingForm({ selectedInvoice = null, onModalToggle }) {
  const { dispatch } = useInvoices();
  return (
    <Formik
      className={styles.form}
      initialValues={selectedInvoice || emptyInvoice}
      onSubmit={(values) => {
        console.log("Subb");
        dispatch({ type: "invoice/create", payload: values });
        onModalToggle();
      }}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <Heading text="Create Invoice" />

        <h3 className="text-accent-1">Bill from</h3>
        <TextInput label="Street Address" name="sender.street" type="text" />
        <div className={styles.formGroup}>
          <TextInput label="City" name="sender.city" type="text" />
          <TextInput label="Post Code" name="sender.postCode" type="text" />
          <TextInput label="Country" name="sender.country" type="text" />
        </div>

        <h3 className="text-accent-1">Bill to</h3>
        <TextInput label="Client's Name" name="client.name" type="text" />
        <TextInput label="Client's Email" name="client.email" type="text" />
        <TextInput label="Street Address" name="client.street" type="text" />
        <div className={styles.formGroup}>
          <TextInput label="City" name="client.city" type="text" />
          <TextInput label="Post Code" name="client.postCode" type="text" />
          <TextInput label="Country" name="client.country" type="text" />
        </div>

        <div className={styles.formGroup}>
          <DatePicker name="invoiceDate" label="Invoice date" />
          <SelectInput
            label="Payment terms"
            name="paymentTerms"
            options={paymentTermsOptions}
          />
        </div>

        <TextInput
          label="Project desctiption"
          name="projectDescription"
          type="text"
        />
        <ItemList />
        <div className={styles.btnWrap}>
          <Button
            handleClick={onModalToggle}
            colorClass="btnSecondary"
            text="Cancel"
          />

          <Button type="submit" colorClass="btnBlue" text="Save as Draft" />
        </div>
      </Form>
    </Formik>
  );
}

export default BillingForm;
