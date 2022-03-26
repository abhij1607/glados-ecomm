import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import { Categories } from "../pages/Home/categories";

// const fetchCategories = async () => {
//   const response = await axios.get("/api/categories");
//   return response.data.categories;
// };

const CategoriesContext = createContext(null);

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const response = await axios.get("/api/categories");
    setCategories(response.data.categories);
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
const useCategories = () => useContext(CategoriesContext);
export { useCategories, CategoriesProvider };
