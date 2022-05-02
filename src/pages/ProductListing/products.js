import axios from "axios";
import { useData } from "../../context/data-context";
import { useEffect } from "react";
import {
  sortedData,
  filterPrice,
  filterRating,
  filterCategories,
  filterGenres,
} from "../../utils/filter-util";
import { ProductCard } from "./product-card/product-card";

const Products = () => {
  const { dataState, dataDispatch } = useData();
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

  const compose = (...func) => (state, data) =>
    func.reduce((acc, curr) => {
      return curr(state, acc);
    }, data);

  const finalProducts = compose(
    sortedData,
    filterPrice,
    filterRating,
    filterCategories,
    filterGenres
  )(dataState, dataState.products);

  return (
    <main className="main">
      <section className="card-categories auto-container">
        <ul className="list-structure">
          {finalProducts.map((product) => {
            return (
              <li key={product._id} className="list-non-bullet">
                <ProductCard product={product} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
export { Products };
