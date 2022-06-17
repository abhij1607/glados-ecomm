import "./App.css";
import { Nav, Footer } from "./components";
import {
  Home,
  ProductListing,
  Wishlist,
  Login,
  Cart,
  PageNotFound,
  Checkout,
  OrderSummary,
} from "./pages";
import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequireAuth/RequiresAuth";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
        <Route
          path="/order"
          element={
            <RequiresAuth>
              <OrderSummary />
            </RequiresAuth>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
