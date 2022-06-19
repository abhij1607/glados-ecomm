import { CartProductCards } from "../../components/CartProductCard/CartProductCard";
import { BillCard } from "../../components/BillCard/BillCard";
import { useAuth } from "../../context/auth-context";
import { EmptyBucket } from "../../components/EmptyBucket/EmptyBucket";

const Cart = () => {
  const { userState } = useAuth();
  return (
    <>
      <main className="main-pane auto-container">
        <h1 className="text-center">Cart</h1>
        {userState?.userDetails?.cart?.length === 0 && <EmptyBucket />}
        <div className="wrapper wrapper-cart">
          <CartProductCards />
          {userState?.userDetails?.cart?.length > 0 && <BillCard page="CART" />}
        </div>
      </main>
    </>
  );
};

export { Cart };
