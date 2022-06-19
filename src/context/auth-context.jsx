import { createContext, useContext, useReducer, useEffect } from "react";
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
  userDetails: JSON.parse(localStorage.getItem("userDetails")) || {
    cart: [],
    wishlist: [],
    addressList: [],
    selectedAddress: {},
    currentOrder: {},
    orderSummary: [],
  },
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      localStorage.setItem("userToken", payload.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(payload.foundUser));
      return {
        ...state,
        userToken: localStorage.getItem("userToken"),
        userDetails: payload.foundUser,
      };

    case "LOGOUT":
      localStorage.removeItem("userToken");
      localStorage.removeItem("userDetails");
      return { ...initialUserState };

    case "UPDATE_CART":
      return {
        ...state,
        userDetails: { ...state.userDetails, cart: payload },
      };

    case "UPDATE_WISHLIST":
      return {
        ...state,
        userDetails: { ...state.userDetails, wishlist: payload },
      };

    case "UPDATE_SELECTED_ADDRESS":
      return {
        ...state,
        userDetails: { ...state.userDetails, selectedAddress: payload },
      };

    case "UPDATE_ADDRESS_LIST":
      return {
        ...state,
        userDetails: { ...state.userDetails, addressList: payload },
      };

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

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userState.userDetails));
  }, [userState.userDetails]);

  const addToCart = async (product) => {
    if (!userToken) {
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }
    try {
      const response = await requestAddToCart(userToken, product);

      if (response.status === 200 || response.status === 201) {
        dispatchUserState({
          type: "UPDATE_CART",
          payload: response.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromCart = async (product) => {
    try {
      const response = await requestRemoveFromCart(userToken, product);
      if (response.status === 200 || response.status === 201) {
        dispatchUserState({
          type: "UPDATE_CART",
          payload: response.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const clearCart = async (products) => {
    try {
      await Promise.all(
        products.map((product) => requestRemoveFromCart(userToken, product))
      );
      dispatchUserState({
        type: "UPDATE_CART",
        payload: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async (product) => {
    if (!userToken) {
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }
    try {
      const response = await requestAddToWishlist(userToken, product);

      if (response.status === 200 || response.status === 201) {
        dispatchUserState({
          type: "UPDATE_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromWishlist = async (product) => {
    try {
      const response = await requestRemoveFromWishlist(userToken, product);
      if (response.status === 200 || response.status === 201) {
        dispatchUserState({
          type: "UPDATE_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cartProductIncrement = async (product) => {
    try {
      const response = await requestCartProductIncrement(userToken, product);
      if (response.status === 200 || response.status === 201) {
        dispatchUserState({
          type: "UPDATE_CART",
          payload: response.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cartProductDecrement = async (product) => {
    try {
      const response = await requestCartProductDecrement(userToken, product);
      if (response.status === 200 || response.status === 201) {
        dispatchUserState({
          type: "UPDATE_CART",
          payload: response.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const response = await requestLogin({ email, password });
      if (response.status === 200 || response.status === 201) {
        dispatchUserState({ type: "LOGIN", payload: response.data });
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
        clearCart,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
