import styles from "./InvoiceFooter.module.css";

function InvoiceFooter() {
  return (
    <>
      <footer className={`${styles.desktopFooter} ${styles.footer} bg-primary`}>
        <div>
          <span className="fs-small-text">Item Name</span>
          <span className="fs-small-text">Qty.</span>
          <span className="fs-small-text">Price</span>
          <span className="fs-small-text">Total</span>
          <span className="fw-bold">Brand Guidelines</span>
          <span className="fw-bold">1</span>
          <span className="fw-bold">$1.800</span>
          <span className="fw-bold">$1.800</span>
        </div>
        <div className={styles.total}>
          <span className="fs-small-text">Amount Due</span>
          <span className="fs-featured fw-bold">$1.800</span>
        </div>
      </footer>
      <footer
        className={`${styles.mobileFooter} ${styles.footer} bg-primary fw-bold`}
      >
        <div>
          <div>
            <span>Brand Guidelines</span>
            <div>1 x $1.800</div>
          </div>
          <span>$1.800</span>
        </div>
        <div>
          <span>Grand Total</span>
          <span className="fs-featured">$1.800</span>
        </div>
      </footer>
    </>
  );
}

export default InvoiceFooter;
