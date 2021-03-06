import { useAuth } from "../../context/auth-context";
import "./cartProductCard.css";

const CartProductCards = () => {
  const {
    userState,
    cartProductIncrement,
    cartProductDecrement,
    addToWishlist,
    removeFromCart,
  } = useAuth();

  const handleMoveToWishlist = async (product) => {
    removeFromCart(product);
    if (
      !userState.userDetails.wishlist.some((item) => item._id === product._id)
    ) {
      addToWishlist(product);
    }
  };

  return (
    <main>
      <section className="cart-pdt">
        <ul className="list-structure flex-column">
          {userState?.userDetails?.cart?.map((product) => {
            return (
              <li key={product._id} className="list-non-bullet">
                <div className="cart card-container flex-row">
                  <div className="img-box">
                    <img
                      className="card-img-border"
                      src="https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Games/StrangersOfParadise/StrangersOfParadise-E.jpg"
                      alt="card-img"
                    />
                  </div>
                  <div>
                    <div className="card-info">
                      <h3 className="card-title txt-base txt-bold">
                        {product.title}
                      </h3>
                      <div className="card-cost">
                        {product.price}₹
                        <span className="p-lg text-strike txt-md align-right">
                          {product.maxPrice}₹
                        </span>
                      </div>
                      <div className="flex-row gap-1">
                        <p>Quantity</p>
                        <div className="flex-row item-center p-lg gap-1">
                          <button
                            className="btn"
                            onClick={() => cartProductDecrement(product)}
                            disabled={product.qty < 2 ? true : false}
                          >
                            <i className="fas fa-sm fa-minus" />
                          </button>

                          <span>{product.qty}</span>

                          <button
                            className="btn"
                            onClick={() => cartProductIncrement(product)}
                          >
                            <i className="fas fa-sm fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card-info flex-column gap-1">
                      <button
                        className="btn btn-primary btn-lg"
                        onClick={() => handleMoveToWishlist(product)}
                      >
                        <i className="fa fa-heart" />
                        Move to Wishlist
                      </button>
                      <button
                        className="btn secondary-link btn-lg"
                        onClick={() => removeFromCart(product)}
                      >
                        <i className="fas fa-shopping-cart" />
                        Remove from cart
                      </button>
                    </div>
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
export { CartProductCards };
