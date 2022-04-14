import "./App.css";
import { Nav, Footer } from "./components";
import {
  Home,
  ProductListing,
  Wishlist,
  Login,
  Cart,
  PageNotFound,
} from "./pages";
import "./styles/index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
