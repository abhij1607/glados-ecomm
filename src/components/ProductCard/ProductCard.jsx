import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { userState, addToCart, addToWishlist, removeFromWishlist } = useAuth();

  return (
    <div className="card-container">
      <img className="card-img-top" src={product.image} alt="card-img" />
      <div className="card-info">
        <h3 className="card-title">{product.title}</h3>
        <div className="flex-row">
          <span>{product.genre}</span>
          <span className="align-right product-rating pd-x-base">
            <i className="fa fa-star" aria-hidden="true"></i>
            {product.ratings}
          </span>
        </div>
      </div>
      <div className="card-action">
        <span className="card-cost">{product.price}₹</span>
        {userState?.userDetails?.cart?.some(
          (item) => item._id === product._id
        ) ? (
          <Link className="btn btn-accent-light btn-lg" to="/cart">
            Go to Cart
          </Link>
        ) : (
          <button className="btn btn-accent btn-lg">
            <i
              className="fas fa-shopping-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </i>
          </button>
        )}

        {userState?.userDetails?.wishlist?.some(
          (item) => item._id === product._id
        ) ? (
          <button
            className="wishlist-icon fill"
            onClick={() => removeFromWishlist(product)}
          >
            <i className="fa fa-2x fa-heart" />
          </button>
        ) : (
          <button
            className="wishlist-icon"
            onClick={() => addToWishlist(product)}
          >
            <i className="fa fa-2x fa-heart" />
          </button>
        )}
      </div>
    </div>
  );
};

export { ProductCard };
