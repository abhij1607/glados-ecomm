import "./SearchBox.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../../context/data-context";

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const {
    dataState: { products },
  } = useData();

  const navigate = useNavigate();

  const searchSuggestions = () => {
    if (searchKeyword !== "") {
      return products?.filter((product) =>
        product.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }
  };

  const performSearch = (keyword) => {
    if (keyword) {
      navigate(`/results?search_query=${encodeURIComponent(keyword)}`);
    }
    setSearchKeyword("");
  };

  return (
    <div className="flex-row wd-full search-div">
      <input
        type="search"
        className="input input-search input-primary"
        id="search"
        name="search"
        placeholder="Search..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") performSearch(e.target.value);
        }}
      />
      <button className="btn btn-search" type="search">
        <i className="fas fa-2x fa-search" title="search" />
      </button>
      {searchSuggestions() && (
        <ul className="suggestions-box flex-column wd-full">
          {searchSuggestions().map((product) => (
            <li
              key={product._id}
              className="suggestion-list wd-full pd-x-base pd-y-sm align-left"
              onClick={() => performSearch(product.title)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { SearchBox };
