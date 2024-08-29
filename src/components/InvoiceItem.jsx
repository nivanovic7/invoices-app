import { Link } from "react-router-dom";
import styles from "./InvoiceItem.module.css";
import Row from "./Row";
import Status from "./Status";
import Arrow from "./Arrow";

function InvoiceItem() {
  return (
    <li className={styles.invoice}>
      <Link to="details">
        <Row>
          <div>
            <span className={`${styles.id} fw-semi-bold`}>RT3080</span>
            <span className={`${styles.dueDate} text-neutral-300`}>
              Due 18 Aug 2025
            </span>
            <span className={`${styles.name} text-neutral-300`}>John Doe</span>
          </div>
          <div>
            <span className={`${styles.amount} fs-featured`}>$1800</span>

            <Status status="PaId" />
            <Arrow direction="right" />
          </div>
        </Row>
      </Link>
    </li>
  );
}

export default InvoiceItem;
