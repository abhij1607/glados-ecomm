const AddressCard = ({ address }) => {
  return (
    <>
      <div className="">
        <p className="">
          <span className="">{address.name}</span>
          <span className="">{address.mobile}</span>
        </p>
        <p className="">
          {(address.address, address.city, address.state)} -{" "}
          <span className="">{address.pincode}</span>
        </p>
      </div>
    </>
  );
};

export { AddressCard };
