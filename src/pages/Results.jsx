import Button from "../components/Button";
import Filter from "../components/Filter";
import Heading from "../components/Heading";
import InvoiceItem from "../components/InvoiceItem";
import styles from "./Results.module.css";

function Results() {
  return (
    <div className={`${styles.results} container`}>
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
