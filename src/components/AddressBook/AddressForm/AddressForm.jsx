import { useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { v4 as uuid } from "uuid";

const AddressForm = ({ initialFormState, toggleIsAddressFormActive }) => {
  const [formState, setFormState] = useState(initialFormState);

  const { userState, dispatchUserState } = useAuth();

  const updateName = (e) => {
    setFormState((state) => ({ ...state, name: e.target.value }));
  };
  const updateMobile = (e) => {
    setFormState((state) => ({ ...state, mobile: e.target.value }));
  };
  const updatePincode = (e) => {
    setFormState((state) => ({ ...state, pincode: e.target.value }));
  };

  const updateAddress = (e) => {
    setFormState((state) => ({ ...state, address: e.target.value }));
  };
  const updateCity = (e) => {
    setFormState((state) => ({ ...state, city: e.target.value }));
  };
  const updateState = (e) => {
    setFormState((state) => ({ ...state, state: e.target.value }));
  };

  const saveNewAddress = () => {
    const payload = userState.userDetails.addressList
      ? [...userState.userDetails.addressList, { ...formState, _id: uuid() }]
      : [{ ...formState, _id: uuid() }];
    dispatchUserState({ type: "UPDATE_ADDRESS_LIST", payload });
    toggleIsAddressFormActive();
    setFormState({});
  };

  const updateEditedAddress = () => {
    const payload = userState.userDetails.addressList.map((address) =>
      address._id === formState._id ? formState : address
    );

    dispatchUserState({ type: "UPDATE_ADDRESS_LIST", payload });
    toggleIsAddressFormActive();
    setFormState({});
  };

  const submitForm = (e) => {
    e.preventDefault();
    formState._id ? updateEditedAddress() : saveNewAddress();
  };

  const updateDummyData = (e) => {
    e.preventDefault();
    setFormState((state) => ({
      ...state,
      name: "John Doe",
      mobile: "5120995324",
      pincode: "560078",
      address: "#1/4 , 100ft Ring Road, Jp Nagar - 4 Phase, Dollars Colony",
      city: "Bangalore",
      state: "Karnataka",
    }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    toggleIsAddressFormActive();
    setFormState({});
  };

  return (
    <div className="box-shadow">
      <form className="flex-column gap-1">
        <label htmlFor="name">
          <input
            className="wd-full"
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            value={formState.name || ""}
            onChange={updateName}
            required
          />
        </label>
        <label htmlFor="mobile">
          <input
            className="wd-full"
            type="number"
            name="mobile"
            placeholder="10 digit Mobile Number"
            id="mobile"
            value={formState.mobile || ""}
            onChange={updateMobile}
            required
          />
        </label>
        <label htmlFor="pincode">
          <input
            className="wd-full"
            type="number"
            name="pincode"
            placeholder="Pincode"
            id="pincode"
            value={formState.pincode || ""}
            onChange={updatePincode}
            required
          />
        </label>

        <label htmlFor="address">
          <input
            className="wd-full"
            type="text"
            name="address"
            placeholder="Address"
            id="locality"
            value={formState.address || ""}
            onChange={updateAddress}
            required
          />
        </label>
        <label htmlFor="city">
          <input
            className="wd-full"
            type="text"
            name="city"
            placeholder="City"
            id="city"
            value={formState.city || ""}
            onChange={updateCity}
            required
          />
        </label>
        <label htmlFor="state">
          <input
            className="wd-full"
            type="text"
            name="state"
            placeholder="State"
            id="state"
            value={formState.state || ""}
            onChange={updateState}
            required
          />
        </label>
        <div className="pd-y-base flex-row gap-1">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitForm}
          >
            Save
          </button>
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn" onClick={updateDummyData}>
            Fill Dummy Data
          </button>
        </div>
      </form>
    </div>
  );
};

export { AddressForm };
