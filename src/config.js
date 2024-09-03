const emptyInvoice = {
  status: "",
  date: "",
  paymentTerms: "",
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

const paymentTermsOptions = [
  { value: "30", label: "30 Days" },
  { value: "20", label: "20 Days" },
  { value: "10", label: "10 Days" },
];

export { emptyInvoice, paymentTermsOptions };
