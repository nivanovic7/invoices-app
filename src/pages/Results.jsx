import Button from "../components/Button";
import Filter from "../components/Filter";
import Heading from "../components/Heading";
import InvoiceItem from "../components/InvoiceItem";
import { useInvoices } from "../contexts/InvoiceContext";
import styles from "./Results.module.css";

function Results() {
  const { dispatch } = useInvoices();

  return (
    <div className={`${styles.results} container`}>
      <button onClick={() => dispatch({ type: "create" })}>dispatch</button>
      <header className={styles.header}>
        <Heading text="Invoices">
          <p className="fs-small-text text-neutral-300">
            There is 8 total Invoices
          </p>
        </Heading>
        <Filter />
        <Button text={"New invoice "} colorClass={"btnBlue"} btnIcon={"+"} />
      </header>

      <ul role="list">
        <InvoiceItem />
        <InvoiceItem />
        <InvoiceItem />
      </ul>
    </div>
  );
}

export default Results;
