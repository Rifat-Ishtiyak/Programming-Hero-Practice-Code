const storeData = (productID) => {
  let localCart = {};

  const storedCart = localStorage.getItem("fake-cart");
  if (storedCart) {
    localCart = JSON.parse(storedCart);
  } else {
    localCart = {};
  }

  const count = localCart[productID];

  if (count) {
    localCart[productID] = count + 1;
  } else {
    localCart[productID] = 1;
  }

  localStorage.setItem("fake-cart", JSON.stringify(localCart));
  console.log(productID);
};

export { storeData };
