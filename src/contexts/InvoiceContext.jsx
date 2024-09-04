import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { calculateDueDate } from "../helpers/helperFunctions";

const InvoiceContext = createContext();

const initialState = {
  invoices: [],
  selectedInvoice: null,
  status: "home",
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "invoice/create":
      return {
        ...state,
        invoices: [
          ...state.invoices,
          {
            id: uuidv4(),
            status: "draft",
            dueDate: calculateDueDate(
              action.payload.date,
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

  console.log(invoices);

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
