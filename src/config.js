const emptyInvoice = {
  status: "",
  date: "",
  paymentTerms: "Net 30 days",
  sender: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  client: {
    name: "",
    email: "",
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  projectDescription: "",
  items: [
    { itemName: "", quantity: "", price: "" },
    { itemName: "", quantity: "", price: "" },
  ],
};

export { emptyInvoice };
