import { Link, useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Row from "../components/Row";
import Status from "../components/Status";
import styles from "./Details.module.css";
import Arrow from "../components/Arrow";
import InvoiceDetails from "../components/InvoiceDetails";
import Modal from "../components/Modal";
import BillingForm from "../components/BillingForm";
import { useInvoices } from "../contexts/InvoiceContext";

function Details({ onModalToggle, isModalOpen }) {
  const [searchParams] = useSearchParams();
  const invoiceId = searchParams.get("id");

  const invoices = useInvoices();
  const selectedInvoice = invoices.invoices.filter(
    (invoice) => invoice.id === invoiceId
  )[0];

  console.log(selectedInvoice);
  return (
    <div className={`${styles.details} container`}>
      <Link to="/">
        <Arrow direction="left" /> Go back
      </Link>

      <Row>
        <div>
          <span>Status </span>
          <Status status={selectedInvoice.status} />
        </div>

        <div className={styles.buttonsWrap}>
          <Button
            handleClick={onModalToggle}
            text="Edit"
            colorClass="btnNeutral"
          />
          <Button text="Delete" colorClass="btnRed" />
          <Button text="Mark as Paid" colorClass="btnBlue" />
        </div>
      </Row>
      <InvoiceDetails selectedInvoice={selectedInvoice} />

      {isModalOpen && (
        <Modal>
          <BillingForm
            selectedInvoice={selectedInvoice}
            onModalToggle={onModalToggle}
          />
        </Modal>
      )}
    </div>
  );
}

export default Details;
