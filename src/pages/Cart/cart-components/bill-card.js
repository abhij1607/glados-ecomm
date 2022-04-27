import { useAuth } from "../../../context/auth-context";

const BillCard = () => {
  const { userState } = useAuth();

  const initialBill = {
    totalProductPrice: 0,
    discount: 0,
  };

  const billCalculator = (products) => {
    return products.reduce((accumulator, product) => {
      accumulator.totalProductPrice += product.price * product.qty;
      accumulator.discount += (product.maxPrice - product.price) * product.qty;
      return accumulator;
    }, initialBill);
  };

  const bill = billCalculator(userState.cart);
  return (
    <aside className="bill-container box-shadow auto-container">
      <div className="bill-title">
        <h3>Price Details</h3>
      </div>
      {userState.cart.map((product) => {
        return (
          <div key={product._id} className="h4 bill-price-container flex-row">
            <span className="bill-price-title">
              {product.title}({product.qty} items)
            </span>
            <span className="bill-price">{product.price * product.qty}₹</span>
          </div>
        );
      })}

      <div className="h4 bill-price-container flex-row">
        <span className="bill-price">Discount</span>
        <span className="bill-price">{bill.discount}₹</span>
      </div>
      <div className="h4 bill-price-container flex-row">
        <span className="bill-price">Delivery Charges</span>
        <span className="bill-price">Free</span>
      </div>
      <div className="bill-price-container bill-price-final flex-row">
        <h3 className="bill-price">Price({userState.cartCounter} items)</h3>
        <h3 className="bill-price">{bill.totalProductPrice}₹</h3>
      </div>
      <div className="bill-price-container">
        <p className="bill-price h4">
          You will Save
          <span className="txt-wt-bold">{bill.discount}₹</span>
          on this order
        </p>
      </div>
      <button className="btn btn-primary btn-lg">
        <i className="fas fa-shopping-bag" />
        Place order
      </button>
    </aside>
  );
};
export { BillCard };
