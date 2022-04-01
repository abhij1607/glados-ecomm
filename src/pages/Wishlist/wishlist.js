import "./wishlist.css";
import { useUserProducts } from "../../context/user-products-context";

const Wishlist = () => {
  const { productState, productDispatch } = useUserProducts();
  return (
    <div className="wrapper">
      <main className="main-pane auto-container">
        <h1 className="h2">
          My Wishlist
          <span className="p-lg txt-wt-light">
            ` {productState.wishlist.length} Items`
          </span>
        </h1>
        {/* category list cards */}
        <section className="card-categories">
          <ul className="list-structure">
            {productState.wishlist.map((product) => {
              return (
                <li key={product._id} className="list-non-bullet">
                  <div className="card-container">
                    <img
                      className="card-img-top"
                      src="https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Games/StrangersOfParadise/StrangersOfParadise-E.jpg"
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
                      <button
                        className="wishlist-icon fill"
                        onClick={() => {
                          productDispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: product,
                          });
                        }}
                      >
                        <i className="fa fa-2x fa-heart" />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        {/* end category list cards */}
      </main>
    </div>
  );
};
export { Wishlist };
