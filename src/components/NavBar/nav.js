const Nav = () => {
  return (
    <header className="top-nav">
      <nav className="brand-nav navigation box-shadow">
        <div className="nav-col nv-col-1">
          <a className="nav-brand" href="/">
            GLaDOS
          </a>
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
              <a className="link" href="./wishlist.html">
                <i className="fas fa-heart" />
              </a>
            </li>
            <li className="list-item-inline">
              <a className="link" href="./cart.html">
                <i className="fas fa-shopping-cart">Cart</i>
              </a>
            </li>
            <li className="list-item-inline">
              <a className="btn btn-primary-outline" href="./login.html">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* product category bar */}
      <nav className="pdt-category-bar box-shadow navigation">
        <ul className="align-center list-structure">
          <li className="list-item-inline">
            <a className="link" href="./product.html">
              Playstation
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="./product.html">
              Xbox
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="./product.html">
              Nintendo
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="./product.html">
              Mobile Games
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="./product.html">
              Deals
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { Nav };
