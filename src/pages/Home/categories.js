import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Categories = () => {
  const { dataState, dataDispatch } = useData();

  useEffect(() => {
    (async () => {
      try {
        const categoriesResponse = await axios.get("/api/categories");
        dataDispatch({
          type: "CATEGORIES",
          payload: categoriesResponse.data.categories[0].platform,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <section className="card-categories auto-container">
      <ul className="list-structure">
        {dataState.categories.map((category) => {
          return (
            <li key={category._id}>
              <Link
                to="/products"
                className="card-container"
                onClick={() =>
                  dataDispatch({
                    type: "PLATFORM",
                    payload: category.categoryName,
                  })
                }
              >
                <img
                  className="card-img-top ht-182"
                  src={category.categoryImage}
                  alt="card-img"
                  width="320"
                  height="182"
                />
                <div className="card-info">
                  <h3 className="card-title">{category.categoryName}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export { Categories };
