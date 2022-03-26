import { Link } from "react-router-dom";

const TopNav = () => {
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
  );
};

export { TopNav };
