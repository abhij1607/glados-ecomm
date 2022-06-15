import { CartProductCards } from "./cart-components/cart-product-card";
import { BillCard } from "./cart-components/bill-card";
import { useAuth } from "../../context/auth-context";

import "./cart.css";

const Cart = () => {
  const { userState } = useAuth();
  return (
    <>
      <h1 className="text-center">Cart</h1>
      <div className="wrapper wrapper-cart">
        <CartProductCards />
        {userState?.userDetails?.cart?.length > 0 && <BillCard />}
      </div>
    </>
  );
};

export { Cart };
