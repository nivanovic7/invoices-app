import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { calculateDueDate } from "../helpers/helperFunctions";

const InvoiceContext = createContext();

const initialState = {
  invoices: [
    {
      id: uuidv4(),
      status: "draft",
      dueDate: calculateDueDate(new Date(), 10),
      invoiceDate: new Date().toISOString().split("T")[0],
      paymentTerms: "10",
      sender: {
        street: "Cara dusana",
        city: "Banjaluka",
        postCode: "77000",
        country: "Bih",
      },
      client: {
        name: "Nikola Ivanovic",
        email: "nikola@gmail.com",
        street: "Sehovina",
        city: "Nevesinje",
        postCode: "82800",
        country: "RS",
      },
      projectDescription: "Buzing stuff",
      items: [
        { itemName: "Laptop", quantity: "2", price: "999" },
        { itemName: "Iphone", quantity: "1", price: "1550" },
      ],
    },
    {
      id: uuidv4(),
      status: "pending",
      dueDate: calculateDueDate(new Date(), 10),
      invoiceDate: new Date().toISOString().split("T")[0],
      paymentTerms: "10",
      sender: {
        street: "Cara lazara",
        city: "Nevesinje",
        postCode: "77000",
        country: "Bih",
      },
      client: {
        name: "Petar Markvic",
        email: "nikola@gmail.com",
        street: "Sehovina",
        city: "Nevesinje",
        postCode: "82800",
        country: "RS",
      },
      projectDescription: "Buzing stuff",
      items: [
        { itemName: "Laptop", quantity: "2", price: "140" },
        { itemName: "Iphone", quantity: "1", price: "150" },
      ],
    },
  ],
  selectedInvoice: null,
  status: "home",
};

function reducer(state, action) {
  switch (action.type) {
    case "invoice/create":
      console.log(action.payload);
      return {
        ...state,
        invoices: [
          ...state.invoices,
          {
            id: uuidv4(),
            status: "draft",
            dueDate: calculateDueDate(
              action.payload.invoiceDate,
              action.payload.paymentTerms
            ),
            ...action.payload,
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
    throw new Error("InvoiceContext was used outside AuthProvider");
  }
  return context;
}

export { InvoiceProvider, useInvoices };
