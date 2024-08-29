import Address from "./Address";
import styles from "./InvoiceDetails.module.css";
import TitleAndDesc from "./TitleAndDesc";

function InvoiceDetails() {
  return (
    <section className={`${styles.invoice} bg-secondary`}>
      <header className={styles.sellerInfo}>
        <article>
          <span>#ID</span>
          <br />
          <span>Re-branding</span>
        </article>
        <Address
          //   textAlign="right"
          street="Union terrase 18"
          city="London"
          postCode="EZ35S"
          country="United Kingdom"
        />
      </header>
      <main className={styles.buyerInfo}>
        <TitleAndDesc title="Invoice date" desc="Aug 18, 2021" />
        <TitleAndDesc title="Payment due" desc="Aug 19, 2021" />
        <TitleAndDesc title="Sent to" desc="jensenh@mail.com" />
        <TitleAndDesc title="Bill to" desc="Jensen Huang">
          <Address
            textAlign="left"
            street="106 Kendell Street"
            city="Manchester"
            postCode="NR24 5WQ"
            country="United Kingdom"
          />
        </TitleAndDesc>
      </main>
      <footer className={styles.invoiceSummary}></footer>
    </section>
  );
}

export default InvoiceDetails;
