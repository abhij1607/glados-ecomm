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
  SearchResult,
} from "./pages";
import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "./RequireAuth/RequiresAuth";
import { useData } from "./context/data-context";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const { dataDispatch } = useData();

  useEffect(() => {
    (async () => {
      try {
        const productsResponse = await axios.get("/api/products");
        dataDispatch({
          type: "PRODUCTS",
          payload: productsResponse.data.products,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/results" element={<SearchResult />} />
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
