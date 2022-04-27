import { CartProductCards } from "./cart-components/cart-product-card";
import { BillCard } from "./cart-components/bill-card";
import { useAuth } from "../../context/auth-context";

import "./cart.css";

const Cart = () => {
  const { userState } = useAuth();
  return (
    <div className="wrapper wrapper-cart">
      <CartProductCards />
      {userState.cart.length > 0 && <BillCard />}
    </div>
  );
};

export { Cart };
