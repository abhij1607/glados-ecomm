import axios from "axios";
import { useData } from "../../context/data-context";
import { useUserProducts } from "../../context/user-products-context";
import { useEffect } from "react";
import {
  sortedData,
  filterPrice,
  filterRating,
  filterCategories,
} from "../../utils/filter-util";

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
    filterCategories
  )(dataState, dataState.products);

  const { productState, productDispatch } = useUserProducts();
  return (
    <main>
      <section className="card-categories auto-container">
        <ul className="list-structure">
          {finalProducts.map((product) => {
            return (
              <li key={product._id} className="list-non-bullet">
                <div className="card-container">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt="card-img"
                  />
                  <div className="card-info">
                    <h3 className="card-title">{product.title}</h3>
                  </div>
                  <div className="card-action">
                    <span className="card-cost">{product.price}₹</span>
                    <button className="btn btn-primary btn-lg">
                      <i
                        className="fas fa-shopping-cart"
                        onClick={() =>
                          productDispatch({
                            type: "ADD_TO_CART",
                            payload: product,
                          })
                        }
                      >
                        Add to Cart
                      </i>
                    </button>
                    {productState.wishlist.some(
                      (item) => item._id === product._id
                    ) ? (
                      <button
                        className="wishlist-icon fill"
                        onClick={() =>
                          productDispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: product,
                          })
                        }
                      >
                        <i className="fa fa-2x fa-heart" />
                      </button>
                    ) : (
                      <button
                        className="wishlist-icon"
                        onClick={() =>
                          productDispatch({
                            type: "ADD_TO_WISHLIST",
                            payload: product,
                          })
                        }
                      >
                        <i className="fa fa-2x fa-heart" />
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
export { Products };
