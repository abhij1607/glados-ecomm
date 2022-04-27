import { useAuth } from "../../../context/auth-context";
import axios from "axios";
const CartProductCards = () => {
  const { dispatchUserState, userState, userToken } = useAuth();

  const handleCartProductIncrement = async (product) => {
    try {
      const cartResponse = await axios({
        method: "post",
        url: `/api/user/cart/${product._id}`,
        headers: {
          authorization: userToken,
        },
        data: {
          action: {
            type: "increment",
          },
        },
      });
      console.log(cartResponse);
      if (cartResponse.status === 200) {
        dispatchUserState({
          type: "UPDATE_CART",
          payload: cartResponse.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCartProductDecrement = async (product) => {
    try {
      const cartResponse = await axios({
        method: "post",
        url: `/api/user/cart/${product._id}`,
        headers: {
          authorization: userToken,
        },
        data: {
          action: {
            type: "decrement",
          },
        },
      });
      console.log(cartResponse);
      if (cartResponse.status === 200) {
        dispatchUserState({
          type: "UPDATE_CART",
          payload: cartResponse.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveFromCart = async (product) => {
    try {
      const cartResponse = await axios({
        method: "DELETE",
        url: `/api/user/cart/${product._id}`,
        headers: {
          authorization: userToken,
        },
      });
      console.log(cartResponse);
      if (cartResponse.status === 200) {
        dispatchUserState({
          type: "UPDATE_CART",
          payload: cartResponse.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleMoveToWishlist = async (product) => {
    handleRemoveFromCart(product);
    try {
      const wishlistResponse = await axios({
        method: "post",
        url: "/api/user/wishlist",
        headers: {
          authorization: userToken,
        },
        data: {
          product,
        },
      });

      if (wishlistResponse.status === 201) {
        dispatchUserState({
          type: "UPDATE_WISHLIST",
          payload: wishlistResponse.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <section className="auto-container">
        <ul className="list-structure flex-column">
          {userState.cart.map((product) => {
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
                      <h3 className="card-title">{product.title}</h3>
                      <div className="card-cost">
                        {product.price}₹
                        <span className="p-lg text-strike txt-md align-right">
                          {product.maxPrice}₹
                        </span>
                      </div>
                      <div className="flex-row gap-1">
                        <p>Quantity</p>
                        <div className="flex-row p-lg gap-1">
                          <button
                            onClick={() => handleCartProductDecrement(product)}
                            disabled={product.qty < 2 ? true : false}
                          >
                            <i className="fas fa-sm fa-minus" />
                          </button>
                          <input
                            className="input input-primary"
                            type="number"
                            name="quantity"
                            id="quantity"
                            value={product.qty}
                          />
                          <button
                            onClick={() => handleCartProductIncrement(product)}
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
                        className="btn btn-secondary btn-lg"
                        onClick={() => handleRemoveFromCart(product)}
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
