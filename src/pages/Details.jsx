import { Link } from "react-router-dom";
import Button from "../components/Button";
import Row from "../components/Row";
import Status from "../components/Status";
import styles from "./Details.module.css";
import Arrow from "../components/Arrow";
import InvoiceDetails from "../components/InvoiceDetails";

function Details() {
  return (
    <div className={`${styles.details} container`}>
      <Link to="/">
        <Arrow direction="left" /> Go back
      </Link>

      <Row>
        <div>
          <span>Status </span>
          <Status status="penDinG" />
        </div>

        <div className={styles.buttonsWrap}>
          <Button text="Edit" colorClass="btnNeutral" />
          <Button text="Delete" colorClass="btnRed" />
          <Button text="Mark as Paid" colorClass="btnBlue" />
        </div>
      </Row>
      <InvoiceDetails />
    </div>
  );
}

export default Details;
