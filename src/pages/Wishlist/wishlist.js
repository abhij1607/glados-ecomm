import "./wishlist.css";
import { useAuth } from "../../context/auth-context";
import { EmptyBucket } from "../../components/EmptyBucket/EmptyBucket";
import { ProductCard } from "../../components/ProductCard/ProductCard";

const Wishlist = () => {
  const { userState } = useAuth();

  return (
    <div className="wrapper">
      <main className="main auto-container">
        <h1 className="h2 text-center">My Wishlist</h1>
        {userState.userDetails.wishlist.length === 0 && <EmptyBucket />}
        <section className="card-categories">
          <ul className="list-structure">
            {userState?.userDetails?.wishlist?.map((product) => {
              return (
                <li key={product._id} className="list-non-bullet">
                  <ProductCard product={product} />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};
export { Wishlist };
