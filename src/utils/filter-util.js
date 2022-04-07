const sortedData = (state, products) => {
  switch (state.sortBy) {
    case "HIGH_TO_LOW":
      return [...products].sort((a, b) => b.price - a.price);
    case "LOW_TO_HIGH":
      return [...products].sort((a, b) => a.price - b.price);
    default:
      return products;
  }
};

const filterPrice = (state, products) => {
  return products.filter(
    (product) => Number(product.price) < Number(state.maxPrice)
  );
};

const filterRating = (state, products) => {
  return products.filter(
    (product) => Number(product.ratings) >= Number(state.ratings)
  );
};

const filterCategories = (state, products) => {
  if (state.platform !== null) {
    return products.filter((product) => product.platform === state.platform);
  }
  return products;
};

const filterGenres = (state, products) => {
  if (state.selectedGenres.length !== 0) {
    return products.filter((product) =>
      state.selectedGenres.includes(product.genre)
    );
  }
  return products;
};

export {
  filterCategories,
  filterRating,
  filterPrice,
  sortedData,
  filterGenres,
};
