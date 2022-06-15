import { CartProductCards } from "./cart-components/cart-product-card";
import { BillCard } from "./cart-components/bill-card";
import { useAuth } from "../../context/auth-context";

import "./checkout.css";
import { AddressBook } from "../../components/AddressBook/address-book";

const Checkout = () => {
  const { userState } = useAuth();
  return (
    <>
      <h1 className="text-center">Checkout</h1>
      <div className="wrapper wrapper-cart">
        <div className="auto-container">
          <AddressBook />
          <CartProductCards />
        </div>

        {userState?.userDetails?.cart?.length > 0 && <BillCard />}
      </div>
    </>
  );
};

export { Checkout };
