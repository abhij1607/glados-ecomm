import { Link } from "react-router-dom";

const EmptyBucket = () => {
  return (
    <div className="flex-column ">
      <img
        src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png"
        alt="Empty cart"
        width="222"
        height="162"
        className="align-center"
      />
      <p className="text-center">Your Bucket is Empty</p>
      <div className="text-center">
        <Link className="btn btn-primary" to="/products">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export { EmptyBucket };
