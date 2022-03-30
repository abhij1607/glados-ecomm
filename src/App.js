import "./App.css";
import logo from "./logo.png";
import { Nav, Footer } from "./components";
import { Home, ProductListing, Wishlist } from "./pages";
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
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
