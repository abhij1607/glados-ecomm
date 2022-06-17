import Confetti from "react-confetti";
import { v4 as uuid } from "uuid";
import { AddressCard } from "../../components/AddressBook/AddressCard/AddressCard";
import { useAuth } from "../../context/auth-context";

const OrderSummary = () => {
  const {
    userState: {
      userDetails: { selectedAddress },
    },
  } = useAuth();
  return (
    <>
      <main className="main-pane auto-container ht-90vh">
        <h1 className="text-center ">Order Summary</h1>
        <Confetti
          width={window.screen.width}
          height={window.screen.height}
          numberOfPieces={1500}
          gravity={0.15}
          recycle={false}
        />
        <div className="pd-y-base">
          <p className="text-center txt-lg txt-bold">
            Order successfully placed!
          </p>
          <p className="text-center txt-md">Payment ID : {uuid()}</p>
        </div>

        <div className="pd-y-base">
          <p className="text-center txt-lg txt-bold">
            Order will be delivered to:
          </p>
          <div className="text-center">
            <AddressCard address={selectedAddress} />
          </div>
        </div>
      </main>
    </>
  );
};

export { OrderSummary };
