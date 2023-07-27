import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import "./style.css";
import "./server";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="header-logo">
          #VANcation
        </Link>
        <nav>
          <Link to="/about" className="header-nav about">
            About
          </Link>
          <Link to="/vans" className="header-nav vans">
            Vans
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>

      <footer>
        <p>Ⓒ 2022 #VANcation</p>
      </footer>
    </BrowserRouter>
  );
}
export default App;
