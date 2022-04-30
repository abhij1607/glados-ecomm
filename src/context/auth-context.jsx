import { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  requestAddToCart,
  requestRemoveFromCart,
  requestAddToWishlist,
  requestRemoveFromWishlist,
  requestCartProductIncrement,
  requestCartProductDecrement,
  requestLogin,
} from "../utils/product-server-request";

const AuthContext = createContext();

const initialUserState = {
  cart: [],
  wishlist: [],
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      localStorage.setItem("userToken", payload.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(payload.foundUser));
      return {
        ...state,
        userToken: payload.encodedToken,
        userDetails: payload.foundUser,
      };

    case "LOGOUT":
      localStorage.removeItem("userToken");
      localStorage.removeItem("userDetails");
      return { ...state, initialUserState };

    case "UPDATE_CART":
      return { ...state, cart: payload };

    case "UPDATE_WISHLIST":
      return { ...state, wishlist: payload };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const userToken = localStorage.getItem("userToken");
  const [userState, dispatchUserState] = useReducer(
    authReducer,
    initialUserState
  );

  const navigate = useNavigate();
  let location = useLocation();

  const addToCart = async (product) => {
    if (!userToken) {
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }
    try {
      const cartResponse = await requestAddToCart(userToken, product);

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

  const removeFromCart = async (product) => {
    try {
      const cartResponse = await requestRemoveFromCart(userToken, product);
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

  const addToWishlist = async (product) => {
    if (!userToken) {
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }
    try {
      const wishlistResponse = await requestAddToWishlist(userToken, product);

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

  const removeFromWishlist = async (product) => {
    try {
      const removeWishlistResponse = await requestRemoveFromWishlist(
        userToken,
        product
      );
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

  const cartProductIncrement = async (product) => {
    try {
      const cartResponse = await requestCartProductIncrement(
        userToken,
        product
      );
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

  const cartProductDecrement = async (product) => {
    try {
      const cartResponse = await requestCartProductDecrement(
        userToken,
        product
      );
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

  const login = async ({ email, password }) => {
    try {
      const loginResponse = await requestLogin({ email, password });
      if (loginResponse.status === 200) {
        dispatchUserState({ type: "LOGIN", payload: loginResponse.data });
        navigate(location?.state?.from?.pathname || "/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        userState,
        dispatchUserState,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        cartProductIncrement,
        cartProductDecrement,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
