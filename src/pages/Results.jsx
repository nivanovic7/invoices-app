import Button from "../components/Button";
import Filter from "../components/Filter";
import Heading from "../components/Heading";
import InvoiceItem from "../components/InvoiceItem";
import { useInvoices } from "../contexts/InvoiceContext";
import styles from "./Results.module.css";
import BillingForm from "../components/BillingForm";
import Modal from "../components/Modal";

function Results({ isModalOpen, onModalToggle }) {
  const { invoices, dispatch } = useInvoices();

  return (
    <div className={`${styles.results} container`}>
      <header className={styles.header}>
        <Heading text="Invoices">
          <p className="fs-small-text text-neutral-300">
            There is 8 total Invoices
          </p>
        </Heading>
        <Filter />
        <Button
          handleClick={onModalToggle}
          text={"New invoice "}
          colorClass={"btnBlue"}
          btnIcon={"+"}
        />
      </header>
      <ul role="list">
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </ul>

      {isModalOpen && (
        <Modal>
          <BillingForm onModalToggle={onModalToggle} />
        </Modal>
      )}
    </div>
  );
}

export default Results;
