import "./product-listing.css";
import { Filter } from "./side-filter";
import { Products } from "./products";

const ProductListing = () => {
  return (
    <div className="wrapper">
      <Filter />
      <Products />
    </div>
  );
};
export { ProductListing };
