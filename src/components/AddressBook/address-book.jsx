import { AddressForm } from "./AddressForm/AddressForm";
import { useAuth } from "../../context/auth-context";
import { useState, useEffect } from "react";
import "./addressBook.css";

const AddressBook = () => {
  const {
    userState: {
      userDetails: { addressList, selectedAddress },
    },
    dispatchUserState,
  } = useAuth();
  const [isAddressFormActive, setIsAddressFormActive] = useState(false);
  const [isAddressChange, setIsAddressChange] = useState(
    !Boolean(selectedAddress)
  );
  const [initialFormState, setInitialFormState] = useState({});

  const toggleIsAddressFormActive = () => {
    setIsAddressFormActive((previous) => !previous);
  };

  useEffect(() => {
    if (!addressList) {
      setIsAddressFormActive(true);
    }
  }, []);

  const handleSelectedAddress = (address) => {
    dispatchUserState({ type: "UPDATE_SELECTED_ADDRESS", payload: address });
    setIsAddressChange(false);
  };

  return (
    <div className="address-book align-center">
      <h3 className="">Delivery Address</h3>

      <DeliveryAddress
        selectedAddress={selectedAddress}
        isAddressChange={isAddressChange}
        setIsAddressChange={setIsAddressChange}
      />

      {isAddressChange && (
        <ul className="list-structure flex-column address-structure">
          {addressList?.map((address) => {
            return (
              <AddressListCard
                key={address._id}
                address={address}
                handleSelectedAddress={handleSelectedAddress}
              />
            );
          })}
        </ul>
      )}
      <div className="list-structure wd-full address-structure">
        {!isAddressFormActive && isAddressChange && (
          <div className="wd-full pd-y-base">
            <button
              className="btn btn-primary wd-full"
              onClick={toggleIsAddressFormActive}
            >
              Add a new address
            </button>
          </div>
        )}

        <AddAddressForm
          isAddressFormActive={isAddressFormActive}
          initialFormState={initialFormState}
          toggleIsAddressFormActive={toggleIsAddressFormActive}
        />
      </div>
    </div>
  );
};

const AddressListCard = ({ address, handleSelectedAddress }) => {
  const [isEditFormActive, setIsEditFormActive] = useState(false);
  const { userState, dispatchUserState } = useAuth();

  const toggleEditForm = () => setIsEditFormActive((previous) => !previous);

  const removeAddress = (e) => {
    const payload = userState.userDetails.addressList.filter(
      (item) => item._id !== address._id
    );
    dispatchUserState({ type: "UPDATE_ADDRESS_LIST", payload });
  };

  return (
    <li>
      {!isEditFormActive && (
        <label htmlFor={address._id} className="flex-row gap-1 align-base">
          <input
            type="radio"
            name="address"
            id={address._id}
            onChange={() => handleSelectedAddress(address)}
          />
          <div className="">
            <div className="">
              <p className="flex-row gap-2">
                <span className="">{address.name}</span>
                <span className="">{address.mobile}</span>
              </p>
              <p className="">
                {`${address.address},
                        ${address.city},
                        ${address.state}`}
                - <span className="">{address.pincode}</span>
              </p>
              <div>
                <button className="btn btn-primary" onClick={toggleEditForm}>
                  Edit
                </button>
                <button type="button" className="btn" onClick={removeAddress}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </label>
      )}
      <AddAddressForm
        isAddressFormActive={isEditFormActive}
        initialFormState={address}
        toggleIsAddressFormActive={toggleEditForm}
      />
    </li>
  );
};

const DeliveryAddress = ({
  selectedAddress,
  isAddressChange,
  setIsAddressChange,
}) => {
  return (
    <>
      {selectedAddress && !isAddressChange && (
        <div className="flex-row gap-2 align-base">
          <div className="">
            <p className="flex-row gap-2">
              <span className="">{selectedAddress.name}</span>
              <span className="">{selectedAddress.mobile}</span>
            </p>
            <p className="">
              {`${selectedAddress.address},
                        ${selectedAddress.city},
                        ${selectedAddress.state}`}
              - <span className="">{selectedAddress.pincode}</span>
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setIsAddressChange(true)}
          >
            change
          </button>
        </div>
      )}
    </>
  );
};

const AddAddressForm = ({
  isAddressFormActive,
  initialFormState,
  toggleIsAddressFormActive,
}) => {
  return (
    <>
      {isAddressFormActive && (
        <label
          htmlFor="addressForm"
          className="flex-row gap-1 align-base wd-full"
        >
          <input type="radio" name="address" id="addressForm" />
          <div className="wd-full">
            ADD A NEW ADDRESS
            <AddressForm
              initialFormState={initialFormState}
              toggleIsAddressFormActive={toggleIsAddressFormActive}
            />
          </div>
        </label>
      )}
    </>
  );
};

export { AddressBook };
