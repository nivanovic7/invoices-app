import { createContext, useContext, useReducer } from "react";

const InvoiceContext = createContext();

const initialState = {
  invoices: [],
  selectedInvoice: null,
  status: "home",
};

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return { ...state, status: "notHome" };
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
