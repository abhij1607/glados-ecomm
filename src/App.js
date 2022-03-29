import "./App.css";
import logo from "./logo.png";
import { Nav, Footer } from "./components";
import { Home, ProductListing } from "./pages";
import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
