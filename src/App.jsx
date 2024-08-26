import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Results from "./pages/Results";
import Details from "./pages/Details";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Results />} />
            <Route path="details" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
