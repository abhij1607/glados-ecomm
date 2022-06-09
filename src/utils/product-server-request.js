import axios from "axios";

const requestAddToCart = async (userToken, product) => {
  return await axios({
    method: "post",
    url: "/api/user/cart",
    headers: {
      authorization: userToken,
    },
    data: {
      product,
    },
  });
};

const requestAddToWishlist = async (userToken, product) => {
  return await axios({
    method: "post",
    url: "/api/user/wishlist",
    headers: {
      authorization: userToken,
    },
    data: {
      product,
    },
  });
};

const requestRemoveFromWishlist = async (userToken, product) => {
  return await axios({
    method: "DELETE",
    url: `/api/user/wishlist/${product._id}`,
    headers: {
      authorization: userToken,
    },
  });
};

const requestCartProductIncrement = async (userToken, product) => {
  return await axios({
    method: "post",
    url: `/api/user/cart/${product._id}`,
    headers: {
      authorization: userToken,
    },
    data: {
      action: {
        type: "increment",
      },
    },
  });
};

const requestCartProductDecrement = async (userToken, product) => {
  return await axios({
    method: "post",
    url: `/api/user/cart/${product._id}`,
    headers: {
      authorization: userToken,
    },
    data: {
      action: {
        type: "decrement",
      },
    },
  });
};

const requestRemoveFromCart = async (userToken, product) => {
  return await axios({
    method: "DELETE",
    url: `/api/user/cart/${product._id}`,
    headers: {
      authorization: userToken,
    },
  });
};

const requestLogin = async ({ email, password }) => {
  return await axios({
    method: "post",
    url: "/api/auth/login",
    data: { email, password },
  });
};

export {
  requestAddToCart,
  requestRemoveFromCart,
  requestAddToWishlist,
  requestRemoveFromWishlist,
  requestCartProductIncrement,
  requestCartProductDecrement,
  requestLogin,
};
