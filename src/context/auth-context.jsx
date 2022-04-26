import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialUserState = {
  cart: [],
  wishlist: [],
};

const authReducer = (state, { type, payload }) => {
  console.log(state);
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
  return (
    <AuthContext.Provider value={{ userToken, userState, dispatchUserState }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
