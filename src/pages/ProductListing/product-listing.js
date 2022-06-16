import "./product-listing.css";
import { Filter } from "./side-filter";
import { Products } from "./products";
import { NavCategories } from "../../components/NavBar/nav-components/nav-categories";

const ProductListing = () => {
  return (
    <>
      <NavCategories />
      <div className="wrapper">
        <Filter />
        <Products />
      </div>
    </>
  );
};
export { ProductListing };
