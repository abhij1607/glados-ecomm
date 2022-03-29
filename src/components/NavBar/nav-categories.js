import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { categories } from "../../backend/db/categories";

const NavCategories = () => {
  const { dataState, dataDispatch } = useData();

  useEffect(() => {
    (async () => {
      try {
        const categoriesResponse = await axios.get("/api/categories");
        dataDispatch({
          type: "CATEGORIES",
          payload: categoriesResponse.data.categories,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <nav className="pdt-category-bar box-shadow navigation">
      <ul className="align-center list-structure">
        {dataState.categories.map((category) => {
          return (
            <li
              key={category._id}
              className="list-item-inline"
              onClick={() =>
                dataDispatch({
                  type: "PLATFORM",
                  payload: category.categoryName,
                })
              }
            >
              <Link className="link" to="/products">
                {category.categoryName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export { NavCategories };
