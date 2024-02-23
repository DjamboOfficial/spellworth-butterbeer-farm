import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { OurProducts } from "./pages/OurProducts";
import { SpellworthClients } from "./pages/SpellworthClients";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Route for the root URL */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/clients" element={<SpellworthClients />} />
      </Routes>
    </Router>
  </StrictMode>
);
