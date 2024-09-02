import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const InvoiceContext = createContext();

const initialState = {
  invoices: [],
  selectedInvoice: {
    id: uuidv4(),
    status: "draft",
    date: "Aug 18 2023",
    paymentTerms: "Net 30 days",
    sender: {
      street: "cara dusana",
      city: "banjaluka",
      postCode: 78000,
      country: "BiH",
    },
    client: {
      name: "nikola invaonvic",
      email: "nikola@gmial.com",
      street: "cara lazara",
      city: "nevesinje",
      postCode: 88289,
      country: "BiH",
    },
    projectDescription: "It job",
    items: [
      { itemName: "Laptop", quantity: 1, price: 999 },
      { itemName: "Iphone", quantity: 2, price: 1550 },
    ],
  },
  status: "home",
};

function reducer(state, action) {
  switch (action.type) {
    case "invoice/create":
      return {
        ...state,
        invoices: [
          ...state.invoices,
          {
            id: uuidv4(),
            status: "draft",
            date: "Aug 18 2023",
            paymentTerms: "Net 30 days",
            sender: {
              street: "cara dusana",
              city: "banjaluka",
              postCode: 78000,
              country: "BiH",
            },
            client: {
              name: "nikola invaonvic",
              email: "nikola@gmial.com",
              street: "cara lazara",
              city: "nevesinje",
              postCode: 88289,
              country: "BiH",
            },
            projectDescription: "It job",
            items: [
              { itemName: "Laptop", quantity: 1, price: 999 },
              { itemName: "Iphone", quantity: 2, price: 1550 },
            ],
          },
        ],
      };
  }
}

function InvoiceProvider({ children }) {
  const [{ invoices, selectedInvoice, status }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <InvoiceContext.Provider
      value={{ invoices, selectedInvoice, status, dispatch }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

function useInvoices() {
  const context = useContext(InvoiceContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { InvoiceProvider, useInvoices };
