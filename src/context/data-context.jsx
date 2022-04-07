import { useReducer, createContext, useContext } from "react";

const DataContext = createContext(null);

const initialState = {
  categories: [],
  products: [],
  genres: [],
  platform: null,
  sortBy: null,
  ratings: 1,
  maxPrice: 5000,
  selectedGenres: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORIES":
      return { ...state, categories: action.payload };

    case "PRODUCTS":
      return { ...state, products: action.payload };

    case "GENRES":
      return { ...state, genres: action.payload };

    case "PLATFORM":
      return { ...state, platform: action.payload };

    case "SORTBY":
      return { ...state, sortBy: action.payload };

    case "RATING":
      return { ...state, ratings: action.payload };

    case "MAX_PRICE":
      return { ...state, maxPrice: action.payload };

    case "SELECTED_GENRES":
      return {
        ...state,
        selectedGenres: state.selectedGenres.includes(action.payload)
          ? state.selectedGenres.filter((item) => item !== action.payload)
          : [...state.selectedGenres, action.payload],
      };

    case "RESET":
      return {
        ...initialState,
        categories: state.categories,
        products: state.products,
        genres: state.genres,
      };

    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);
export { useData, DataProvider };
