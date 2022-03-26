const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function addProduct(restaurantId, product) {
  const newProduct = await fetch(REACT_APP_BASE_URL + `/products/${restaurantId}/add-product`,{
    method:'POST',
    credentials: 'include',
    body: product
  });
  return newProduct.json();
}


export {
  addProduct,
}