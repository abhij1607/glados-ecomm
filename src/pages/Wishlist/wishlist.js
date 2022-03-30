import "./wishlist.css";

const Wishlist = () => {
  return (
    <div className="wrapper">
      <main className="main-pane auto-container">
        <h1 className="h2">
          My Wishlist
          <span className="p-lg txt-wt-light">6 Items</span>
        </h1>
        {/* category list cards */}
        <section className="card-categories">
          <ul className="list-structure">
            <li className="list-non-bullet">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Games/StrangersOfParadise/StrangersOfParadise-E.jpg"
                  alt="card-img"
                />
                <span className="badge-card">Special offer</span>
                <div className="card-info">
                  <h3 className="card-title">Stranger of Paradise</h3>
                </div>
                <div className="card-action">
                  <span className="card-cost">1299₹</span>
                  <button className="btn btn-primary btn-lg">
                    <i className="fas fa-shopping-cart">Add to Cart</i>
                  </button>
                  <button className="wishlist-icon">
                    <i className="fa fa-2x fa-heart" />
                  </button>
                </div>
              </div>
            </li>
            <li className="list-non-bullet">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Games/StrangersOfParadise/StrangersOfParadise-E.jpg"
                  alt="card-img"
                />
                <div className="card-info">
                  <h3 className="card-title">Stranger of Paradise</h3>
                </div>
                <div className="card-action">
                  <span className="card-cost">1299₹</span>
                  <button className="btn btn-primary btn-lg">
                    <i className="fas fa-shopping-cart">Add to Cart</i>
                  </button>
                  <button className="wishlist-icon">
                    <i className="fa fa-2x fa-heart" />
                  </button>
                </div>
              </div>
            </li>
            <li className="list-non-bullet">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Games/StrangersOfParadise/StrangersOfParadise-E.jpg"
                  alt="card-img"
                />
                <div className="card-info">
                  <h3 className="card-title">Stranger of Paradise</h3>
                </div>
                <div className="card-action">
                  <span className="card-cost">1299₹</span>
                  <button className="btn btn-primary btn-lg">
                    <i className="fas fa-shopping-cart">Add to Cart</i>
                  </button>
                  <button className="wishlist-icon">
                    <i className="fa fa-2x fa-heart" />
                  </button>
                </div>
              </div>
            </li>
            <li className="list-non-bullet">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Games/StrangersOfParadise/StrangersOfParadise-E.jpg"
                  alt="card-img"
                />
                <div className="card-info">
                  <h3 className="card-title">Stranger of Paradise</h3>
                </div>
                <div className="card-action">
                  <span className="card-cost">1299₹</span>
                  <button className="btn btn-primary btn-lg">
                    <i className="fas fa-shopping-cart">Add to Cart</i>
                  </button>
                  <button className="wishlist-icon">
                    <i className="fa fa-2x fa-heart" />
                  </button>
                </div>
              </div>
            </li>
            <li className="list-non-bullet">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Games/StrangersOfParadise/StrangersOfParadise-E.jpg"
                  alt="card-img"
                />
                <div className="card-info">
                  <h3 className="card-title">Stranger of Paradise</h3>
                </div>
                <div className="card-action">
                  <span className="card-cost">1299₹</span>
                  <button className="btn btn-primary btn-lg">
                    <i className="fas fa-shopping-cart">Add to Cart</i>
                  </button>
                  <button className="wishlist-icon">
                    <i className="fa fa-2x fa-heart" />
                  </button>
                </div>
              </div>
            </li>
            <li className="list-non-bullet">
              <div className="card-container">
                <img
                  className="card-img-top"
                  src="https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Games/StrangersOfParadise/StrangersOfParadise-E.jpg"
                  alt="card-img"
                />
                <div className="card-info">
                  <h3 className="card-title">Stranger of Paradise</h3>
                </div>
                <div className="card-action">
                  <span className="card-cost">1299₹</span>
                  <button className="btn btn-primary btn-lg">
                    <i className="fas fa-shopping-cart">Add to Cart</i>
                  </button>
                  <button className="wishlist-icon">
                    <i className="fa fa-2x fa-heart" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </section>
        {/* end category list cards */}
      </main>
    </div>
  );
};
export { Wishlist };
