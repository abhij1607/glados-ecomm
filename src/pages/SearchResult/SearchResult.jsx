import { useData } from "../../context/data-context";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";

const SearchResult = () => {
  const {
    dataState: { products },
  } = useData();

  const query = new URLSearchParams(useLocation().search);
  const searchKeyword = query.get("search_query");

  const searchFilteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <main className="main ht-100vh">
      <h1 className="pd-x-base text-center">Search Result</h1>
      <div className="card-categories auto-container">
        <ul className="list-structure">
          {searchFilteredProducts.map((product) => (
            <li key={product._id} className="list-non-bullet">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
      {searchFilteredProducts.length === 0 && (
        <h2 className="pd-x-base">No product matched</h2>
      )}
    </main>
  );
};

export { SearchResult };
