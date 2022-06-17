import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import { useState } from "react";

const TopNav = () => {
  const [isSideDrawerActive, setIsSideDrawerActive] = useState(false);
  const { userToken, dispatchUserState, userState } = useAuth();
  const cartCount = userState?.userDetails?.cart.reduce(
    (acc, curr) => (acc += curr.qty),
    0
  );
  const wishlistCount = userState?.userDetails?.wishlist?.length;
  return (
    <nav className="brand-nav navigation gap-1 box-shadow">
      <div className="flex-row wd-full">
        <Link className="logo-brand" to="/">
          GLaDOS
        </Link>
        <button
          className="menu-icon align-right"
          onClick={() => setIsSideDrawerActive(true)}
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </button>
      </div>

      <div className="flex-row wd-full search-div">
        <input
          type="search"
          className="input input-search input-primary"
          id="gsearch"
          name="gsearch"
        />
        <button className="btn btn-search" type="search">
          <i className="fas fa-2x fa-search" title="search" />
        </button>
      </div>

      <div className={`modal-wrapper fade ${isSideDrawerActive ? "show" : ""}`}>
        <aside
          id="side-nav"
          className={`sidebar-nav modal-nav ${
            isSideDrawerActive ? "active" : ""
          }`}
        >
          <div className="drawer-header pd-y-base pd-x-base flex-row">
            <div className="drawer-title">
              <i className="fa fa-2x fa-user" aria-hidden="true"></i>
            </div>
            <button
              className="align-right"
              onClick={() => setIsSideDrawerActive(false)}
            >
              <i className="fa fa-2x fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div className="drawer-content">
            <nav className="drawer-nav-list">
              <Link className="nav-list-item" to="./cart">
                <i className="fas fa-shopping-cart" />
                My cart {cartCount}
              </Link>
              <Link className="nav-list-item" to="./wishlist">
                <i className="fas fa-heart" />
                My Wishlist {wishlistCount}
              </Link>
              <Link className="nav-list-item" to="./login">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                Login
              </Link>
              <a className="nav-list-item">
                <i className="fa fa-sign-in" aria-hidden="true"></i> Signup
              </a>
              <hr className="nav-divider" />
              <a className="nav-list-item">
                <i className="fas fa-cog" />
                Settings
              </a>
              <a className="nav-list-item">
                <i className="fas fa-info" />
                Help &amp; feedback
              </a>
            </nav>
          </div>
        </aside>
      </div>

      <ul id="main-menu" className="">
        <li className="list-item-inline badge-box">
          <Link className="link" to="./wishlist">
            <i className="fas fa-2x fa-heart" />
            {wishlistCount > 0 ? (
              <span className="badge badge-notification">{wishlistCount}</span>
            ) : (
              ""
            )}
          </Link>
        </li>
        <li className="list-item-inline badge-box">
          <Link className="link" to="./cart">
            <i className="fas fa-2x fa-shopping-cart" />
            {userState?.userDetails?.cart.length > 0 ? (
              <span className="badge badge-notification">{cartCount}</span>
            ) : (
              ""
            )}
          </Link>
        </li>
        <li className="list-item-inline">
          {userToken ? (
            <button
              className="btn btn-primary-outline btn-lg fas pd-y-sm"
              onClick={() => {
                dispatchUserState({ type: "LOGOUT" });
              }}
            >
              Logout
            </button>
          ) : (
            <Link className="btn btn-primary-outline btn-lg fas" to="./login">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export { TopNav };
