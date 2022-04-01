import { ProductCards } from "./cart-components/product-card";
import { BillCard } from "./cart-components/bill-card";
import { useUserProducts } from "../../context/user-products-context";
import "./cart.css";

const Cart = () => {
  const { productState } = useUserProducts();
  return (
    <div className="wrapper wrapper-cart">
      <ProductCards />
      {productState.cartCounter > 0 && <BillCard />}
    </div>
  );
};

export { Cart };
