import { CartProductCards } from "./cart-components/cart-product-card";
import { BillCard } from "./cart-components/bill-card";
import { useAuth } from "../../context/auth-context";
import { EmptyBucket } from "../../components/EmptyBucket/EmptyBucket";

import "./cart.css";

const Cart = () => {
  const { userState } = useAuth();
  return (
    <>
      <main className="main-pane auto-container">
        <h1 className="text-center">Cart</h1>
        {userState?.userDetails?.cart?.length === 0 && <EmptyBucket />}
        <div className="wrapper wrapper-cart">
          <CartProductCards />
          {userState?.userDetails?.cart?.length > 0 && <BillCard />}
        </div>
      </main>
    </>
  );
};

export { Cart };
