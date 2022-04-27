import { useAuth } from "../../../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { userToken, dispatchUserState, userState } = useAuth();

  const navigate = useNavigate();
  let location = useLocation();

  const addToCartHandler = async (product) => {
    if (!userToken) {
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }
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

  const addToWishlistHandler = async (product) => {
    if (!userToken) {
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }
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
    <div className="card-container">
      <img className="card-img-top" src={product.image} alt="card-img" />
      <div className="card-info">
        <h3 className="card-title">{product.title}</h3>
        <div className="flex-row">
          <span>{product.genre}</span>
          <span className="align-right product-rating pd-x-base">
            <i className="fa fa-star" aria-hidden="true"></i>
            {product.ratings}
          </span>
        </div>
      </div>
      <div className="card-action">
        <span className="card-cost">{product.price}₹</span>
        {userState.cart.some((item) => item._id === product._id) ? (
          <Link className="btn btn-primary btn-lg" to="/cart">
            Go to Cart
          </Link>
        ) : (
          <button className="btn btn-primary btn-lg">
            <i
              className="fas fa-shopping-cart"
              onClick={() => addToCartHandler(product)}
            >
              Add to Cart
            </i>
          </button>
        )}

        {userState.wishlist.some((item) => item._id === product._id) ? (
          <button
            className="wishlist-icon fill"
            onClick={() => handleRemoveFromWishlist(product)}
          >
            <i className="fa fa-2x fa-heart" />
          </button>
        ) : (
          <button
            className="wishlist-icon"
            onClick={() => addToWishlistHandler(product)}
          >
            <i className="fa fa-2x fa-heart" />
          </button>
        )}
      </div>
    </div>
  );
};

export { ProductCard };
