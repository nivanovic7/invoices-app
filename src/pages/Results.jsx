import Button from "../components/Button";
import Filter from "../components/Filter";
import Heading from "../components/Heading";
import styles from "./Results.module.css";

function Results() {
  return (
    <div className={`${styles.results} container`}>
      <header className={styles.header}>
        <Heading text="Invoices">
          <p>There is 8 total Invoices</p>
        </Heading>
        <Filter />
        <Button text={"New invoice "} colorClass={"btnBlue"} btnIcon={"+"} />
      </header>
    </div>
  );
}

export default Results;
