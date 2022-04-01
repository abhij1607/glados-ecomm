import { createContext, useContext, useReducer } from "react";

const UserProductsContext = createContext();

const useUserProducts = () => useContext(UserProductsContext);

const initialUserProducts = { wishlist: [], cart: [], cartCounter: 0 };

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
      let itemFound = false;
      const updatedCart = [...state.cart].map((item) => {
        if (item._id === action.payload._id) {
          itemFound = true;
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return !itemFound
        ? {
            ...state,
            cart: [...state.cart, { ...action.payload, count: 1 }],
            cartCounter: state.cartCounter + 1,
          }
        : { ...state, cart: updatedCart, cartCounter: state.cartCounter + 1 };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart].filter(
          (product) => product._id !== action.payload._id
        ),
        cartCounter: state.cartCounter - action.payload.count,
      };

    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        cart: [...state.cart].filter(
          (product) => product._id !== action.payload._id
        ),
        cartCounter: state.cartCounter - action.payload.count,
        wishlist: [...state.wishlist, action.payload],
      };

    case "CART_PRODUCT_DECREMENT":
      const updatedDecrementCart = [...state.cart].map((product) => {
        return product._id === action.payload._id
          ? { ...product, count: product.count - 1 }
          : product;
      });

      return {
        ...state,
        cart: updatedDecrementCart,
        cartCounter: state.cartCounter - 1,
      };

    case "CART_PRODUCT_INCREMENT":
      const updatedIncrementCart = [...state.cart].map((product) => {
        return product._id === action.payload._id
          ? { ...product, count: product.count + 1 }
          : product;
      });

      return {
        ...state,
        cart: updatedIncrementCart,
        cartCounter: state.cartCounter + 1,
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
