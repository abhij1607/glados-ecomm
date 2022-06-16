import { useData } from "../../context/data-context";
import { useEffect } from "react";
import axios from "axios";

const Filter = () => {
  const { dataState, dataDispatch } = useData();

  useEffect(() => {
    (async () => {
      try {
        const categoriesResponse = await axios.get("/api/categories");
        dataDispatch({
          type: "GENRES",
          payload: categoriesResponse.data.categories[0].genre,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <aside className="filter-container box-shadow auto-container">
      <div className="filter-title flex-row">
        <h3>FILTERS</h3>
        <button
          type="reset"
          className="link btn"
          onClick={() => {
            dataDispatch({ type: "RESET" });
          }}
        >
          Clear
        </button>
      </div>
      <div className="filter-price-container">
        <h3>Price</h3>
        <div className="filter-price-range flex-row">
          <span>500</span>
          <span>2500</span>
          <span>5000</span>
        </div>
        <input
          type="range"
          name="price-range"
          id="price-range-input"
          min={500}
          max={5000}
          value={dataState.maxPrice}
          onChange={(e) =>
            dataDispatch({ type: "MAX_PRICE", payload: e.target.value })
          }
          className="filter-price-input"
        />
      </div>

      <div className="filter-category-container flex-column">
        <h3>Category by Genre</h3>
        {dataState.genres.map((category) => {
          return (
            <label
              key={category._id}
              className="p-lg"
              htmlFor={`filter-genre-${category.categoryName}`}
            >
              <input
                type="checkbox"
                name="genre-select-option"
                id={`filter-genre-${category.categoryName}`}
                className="filter-category-checkbox"
                onChange={() =>
                  dataDispatch({
                    type: "SELECTED_GENRES",
                    payload: category.categoryName,
                  })
                }
                checked={
                  dataState.selectedGenres.includes(category.categoryName)
                    ? true
                    : false
                }
              />
              {category.categoryName}
            </label>
          );
        })}
      </div>

      <div className="filter-rating-container flex-column">
        <h3>Rating</h3>
        <label className="p-lg" htmlFor="rating-4star">
          <input
            type="radio"
            name="rating"
            id="rating-4star"
            value="4"
            onChange={(e) =>
              dataDispatch({ type: "RATING", payload: e.target.value })
            }
            checked={dataState.ratings == 4 ? true : false}
          />
          4 Stars and above
        </label>
        <label className="p-lg" htmlFor="rating-3star">
          <input
            type="radio"
            name="rating"
            id="rating-3star"
            value="3"
            onChange={(e) =>
              dataDispatch({ type: "RATING", payload: e.target.value })
            }
            checked={dataState.ratings == 3 ? true : false}
          />
          3 Stars and above
        </label>
        <label className="p-lg" htmlFor="rating-2star">
          <input
            type="radio"
            name="rating"
            id="rating-2star"
            value="2"
            onChange={(e) =>
              dataDispatch({ type: "RATING", payload: e.target.value })
            }
            checked={dataState.ratings == 2 ? true : false}
          />
          2 Stars and above
        </label>
        <label className="p-lg" htmlFor="rating-1star">
          <input
            type="radio"
            name="rating"
            id="rating-1star"
            value="1"
            onChange={(e) =>
              dataDispatch({ type: "RATING", payload: e.target.value })
            }
            checked={dataState.ratings == 1 ? true : false}
          />
          1 Stars and above
        </label>
      </div>
      <div className="filter-sort-by flex-column">
        <h3>Sort by</h3>
        <label className="p-lg" htmlFor="price-low-to-high">
          <input
            type="radio"
            name="sort-by"
            id="price-low-to-high"
            onChange={(e) =>
              dataDispatch({ type: "SORTBY", payload: "LOW_TO_HIGH" })
            }
            checked={dataState.sortBy === "LOW_TO_HIGH" ? true : false}
          />
          Price - Low to High
        </label>
        <label className="p-lg" htmlFor="price-high-to-low">
          <input
            type="radio"
            name="sort-by"
            id="price-high-to-low"
            onChange={(e) =>
              dataDispatch({ type: "SORTBY", payload: "HIGH_TO_LOW" })
            }
            checked={dataState.sortBy === "HIGH_TO_LOW" ? true : false}
          />
          Price - High to Low
        </label>
      </div>
    </aside>
  );
};
export { Filter };
