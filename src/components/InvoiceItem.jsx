import { Link } from "react-router-dom";
import styles from "./InvoiceItem.module.css";

function InvoiceItem() {
  return (
    <li className={styles.invoice}>
      <Link to="details">
        <div>
          <span className={`${styles.id} fw-semi-bold`}>RT3080</span>
          <span className={`${styles.dueDate} text-neutral-300`}>
            Due 18 Aug 2025
          </span>
          <span className={`${styles.name} text-neutral-300`}>John Doe</span>
        </div>
        <div>
          <span className={`${styles.amount} fs-featured`}>$1800</span>

          <span className={`${styles.status} bg-draft`}>
            <svg width="20" height="20">
              <circle cx="4" cy="10" r="3.5" />
            </svg>
            Paid
          </span>
        </div>
      </Link>
    </li>
  );
}

export default InvoiceItem;
