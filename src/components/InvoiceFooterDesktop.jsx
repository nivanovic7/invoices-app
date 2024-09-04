import styles from "./InvoiceFooterDesktop.module.css";
import { calculateInvoiceTotal } from "../helpers/helperFunctions";
import { Fragment } from "react";

function InvoiceFooterDesktop({ invoice }) {
  return (
    <footer className={`${styles.desktopFooter} ${styles.footer} bg-primary`}>
      <div>
        <span className="fs-small-text ">Item Name</span>
        <span className="fs-small-text text-right">Qty.</span>
        <span className="fs-small-text text-right">Price</span>
        <span className="fs-small-text text-right">Total</span>
        {invoice.items.map((item) => (
          <Fragment key={item.itemName}>
            <span className="fw-bold ">{item.itemName}</span>
            <span className="fw-bold text-right">{item.quantity}</span>
            <span className="fw-bold text-right">${item.price}</span>
            <span className="fw-bold text-right">
              ${item.quantity * item.price}
            </span>
          </Fragment>
        ))}
      </div>
      <div className={styles.total}>
        <span className="fs-small-text">Amount Due</span>
        <span className="fs-featured fw-bold">
          ${calculateInvoiceTotal(invoice.items)}
        </span>
      </div>
    </footer>
  );
}

export default InvoiceFooterDesktop;
