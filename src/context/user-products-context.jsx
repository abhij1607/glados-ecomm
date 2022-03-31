import { createContext, useContext, useReducer } from "react";

const UserProductsContext = createContext();

const useUserProducts = () => useContext(UserProductsContext);

const initialUserProducts = { wishlist: [], cart: [] };

const userProductReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist].filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart].filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

const UserProductsProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    userProductReducer,
    initialUserProducts
  );
  return (
    <UserProductsContext.Provider value={{ productState, productDispatch }}>
      {children}
    </UserProductsContext.Provider>
  );
};

export { UserProductsProvider, useUserProducts };
