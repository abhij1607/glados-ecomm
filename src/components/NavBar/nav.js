import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header className="top-nav">
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
            <li className="list-item-inline">
              <Link className="link" to="./wishlist.html">
                <i className="fas fa-heart" />
              </Link>
            </li>
            <li className="list-item-inline">
              <Link className="link" to="./cart.html">
                <i className="fas fa-shopping-cart">Cart</i>
              </Link>
            </li>
            <li className="list-item-inline">
              <Link className="btn btn-primary-outline" to="./login.html">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* product category bar */}
      <nav className="pdt-category-bar box-shadow navigation">
        <ul className="align-center list-structure">
          <li className="list-item-inline">
            <Link className="link" to="./product.html">
              Playstation
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link" to="./product.html">
              Xbox
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link" to="./product.html">
              Nintendo
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link" to="./product.html">
              Mobile Games
            </Link>
          </li>
          <li className="list-item-inline">
            <Link className="link" to="./product.html">
              Deals
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { Nav };
