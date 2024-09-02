import { Link } from "react-router-dom";
import styles from "./InvoiceItem.module.css";
import Row from "./Row";
import Status from "./Status";
import Arrow from "./Arrow";

function calculateAmount(items) {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function InvoiceItem({ invoice }) {
  return (
    <li className={styles.invoice}>
      <Link to="details">
        <Row>
          <div>
            <span className={`${styles.id} fw-semi-bold`}>
              {invoice.id.slice(0, 5)}
            </span>
            <span className={`${styles.dueDate} text-neutral-300`}>
              {invoice.date}
            </span>
            <span className={`${styles.name} text-neutral-300`}>
              {invoice.client.name}
            </span>
          </div>
          <div>
            <span className={`${styles.amount} fs-featured`}>
              {calculateAmount(invoice.items)}
            </span>

            <Status status="PaId" />
            <Arrow direction="right" />
          </div>
        </Row>
      </Link>
    </li>
  );
}

export default InvoiceItem;
