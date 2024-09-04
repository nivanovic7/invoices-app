import Address from "./Address";
import styles from "./InvoiceDetails.module.css";
import InvoiceFooter from "./InvoiceFooter";
import TitleAndDesc from "./TitleAndDesc";

function InvoiceDetails({ selectedInvoice }) {
  return (
    <section className={`${styles.invoice} bg-secondary`}>
      <header className={styles.sellerInfo}>
        <article>
          <span>{selectedInvoice.id}</span>
          <br />
          <span>{selectedInvoice.projectDescription}</span>
        </article>
        <Address
          //   textAlign="right"
          street={selectedInvoice.sender.street}
          city={selectedInvoice.sender.city}
          postCode={selectedInvoice.sender.postCode}
          country={selectedInvoice.sender.country}
        />
      </header>
      <main className={styles.buyerInfo}>
        <TitleAndDesc title="Invoice date" desc={selectedInvoice.invoiceDate} />
        <TitleAndDesc title="Payment due" desc={selectedInvoice.dueDate} />
        <TitleAndDesc title="Sent to" desc={selectedInvoice.client.email} />
        <TitleAndDesc title="Bill to" desc={selectedInvoice.client.name}>
          <Address
            textAlign="left"
            street={selectedInvoice.client.street}
            city={selectedInvoice.client.city}
            postCode={selectedInvoice.client.postCode}
            country={selectedInvoice.client.country}
          />
        </TitleAndDesc>
      </main>
      <InvoiceFooter selectedInvoice={selectedInvoice} />
    </section>
  );
}

export default InvoiceDetails;
