import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialUserState = {
  userToken: null,
  userDetails: {
    cart: [],
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    updatedAt: "",
    wishlist: [],
    _id: "",
  },
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
