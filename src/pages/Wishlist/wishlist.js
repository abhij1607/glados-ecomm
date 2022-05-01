import "./wishlist.css";
import axios from "axios";
import { useAuth } from "../../context/auth-context";

const Wishlist = () => {
  const { userState, dispatchUserState, userToken } = useAuth();

  const addToCartHandler = async (product) => {
    try {
      const cartResponse = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: {
          authorization: userToken,
        },
        data: {
          product,
        },
      });

      if (cartResponse.status === 201) {
        dispatchUserState({
          type: "UPDATE_CART",
          payload: cartResponse.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemoveFromWishlist = async (product) => {
    try {
      const removeWishlistResponse = await axios({
        method: "DELETE",
        url: `/api/user/wishlist/${product._id}`,
        headers: {
          authorization: userToken,
        },
      });
      if (removeWishlistResponse.status === 200) {
        dispatchUserState({
          type: "UPDATE_WISHLIST",
          payload: removeWishlistResponse.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="wrapper">
      <main className="main-pane auto-container">
        <h1 className="h2">
          My Wishlist
          <span className="p-lg txt-wt-light">
            ` {userState?.userDetails?.wishlist?.length} Items`
          </span>
        </h1>
        <section className="card-categories">
          <ul className="list-structure">
            {userState?.userDetails?.wishlist?.map((product) => {
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
                          onClick={() => addToCartHandler(product)}
                        >
                          Add to Cart
                        </i>
                      </button>
                      <button
                        className="wishlist-icon fill"
                        onClick={() => handleRemoveFromWishlist(product)}
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
      </main>
    </div>
  );
};
export { Wishlist };
