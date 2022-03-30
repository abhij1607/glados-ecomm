import { Link } from "react-router-dom";
import { useUserProducts } from "../../context/user-products-context";

const TopNav = () => {
  const { productState } = useUserProducts();
  return (
    <nav className="brand-nav navigation box-shadow">
      <div className="nav-col nv-col-1">
        <Link className="nav-brand" to="/">
          GLaDOS
        </Link>
        <div className="nav-col nv-col-2">
          <input
            type="search"
            className="input input-search input-primary"
            id="gsearch"
            name="gsearch"
          />
          <button className="btn btn-primary" type="submit">
            <i className="fas fa-search" title="search" />
          </button>
        </div>
        <ul id="main-menu" className="list-non-bullets align-right">
          <li className="list-item-inline badge-box">
            <Link className="link" to="./wishlist">
              <i className="fas fa-2x fa-heart" />
              {productState.wishlist.length > 0 ? (
                <span className="badge badge-notification">
                  {productState.wishlist.length}
                </span>
              ) : (
                ""
              )}
            </Link>
          </li>
          <li className="list-item-inline badge-box">
            <Link className="link" to="./cart">
              <i className="fas fa-2x fa-shopping-cart" />
              {productState.cart.length > 0 ? (
                <span className="badge badge-notification">
                  {productState.cart.length}
                </span>
              ) : (
                ""
              )}
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="btn btn-primary-outline" to="./login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { TopNav };
