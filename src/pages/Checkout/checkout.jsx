import { CartProductCards } from "../../components/CartProductCard/CartProductCard";
import { BillCard } from "../../components/BillCard/BillCard";
import { useAuth } from "../../context/auth-context";
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
