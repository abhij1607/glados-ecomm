const AddressCard = ({ address }) => {
  return (
    <>
      <div className="text-center">
        <p className="">
          {address.name} {"   "} Contact-
          {address.mobile}
        </p>
        <p></p>
        <p>{address.address}</p>
        <p className="">
          {`${address.city},
                        ${address.state}`}
          - <span className="">{address.pincode}</span>
        </p>
      </div>
    </>
  );
};

export { AddressCard };
