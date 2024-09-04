import { calculateInvoiceTotal } from "../helpers/helperFunctions";
import styles from "./InvoiceFooterMobile.module.css";

function InvoiceFooterMobile({ invoice }) {
  return (
    <footer
      className={`${styles.mobileFooter} ${styles.footer} bg-primary fw-bold`}
    >
      {invoice.items.map((item) => {
        return (
          <div key={item.itemName}>
            <div>
              <span>{item.itemName}</span>
              <div>
                {item.quantity} x ${item.price}
              </div>
            </div>
            <span>$ {item.quantity * item.price}</span>
          </div>
        );
      })}
      <div>
        <span>Grand Total</span>
        <span className="fs-featured">
          ${calculateInvoiceTotal(invoice.items)}
        </span>
      </div>
    </footer>
  );
}

export default InvoiceFooterMobile;
