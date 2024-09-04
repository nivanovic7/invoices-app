import InvoiceFooterDesktop from "./InvoiceFooterDesktop";
import InvoiceFooterMobile from "./InvoiceFooterMobile";

function InvoiceFooter({ selectedInvoice }) {
  return (
    <>
      <InvoiceFooterDesktop invoice={selectedInvoice} />
      <InvoiceFooterMobile invoice={selectedInvoice} />
    </>
  );
}

export default InvoiceFooter;
