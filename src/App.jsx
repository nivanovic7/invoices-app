import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Results from "./pages/Results";
import Details from "./pages/Details";
import { InvoiceProvider } from "./contexts/InvoiceContext";

function App() {
  return (
    <div className="app">
      <InvoiceProvider>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Results />} />
              <Route path="details" element={<Details />} />
            </Route>
          </Routes>
        </Router>
      </InvoiceProvider>
    </div>
  );
}

export default App;
