const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function addProduct(restaurantId, productData) {
  try {
    const newProduct = await fetch(REACT_APP_BASE_URL + `/products/${restaurantId}/add-product`, {
      method: 'POST',
      credentials: 'include',
      body: productData
    });
    return newProduct.json();
  } catch (error) {
    throw new Error(error)
  }
}

async function editProduct(restaurantId, productId, productData) {
  try {
    const editedProduct = await fetch(REACT_APP_BASE_URL + `/${restaurantId}/edit-product/${productId}`, {
      method: 'PUT',
      credentials: 'include',
      body: productData
    });
    return editedProduct.json();
  } catch (error) {
    throw new Error(error)
  }
}


export {
  addProduct,
  editProduct
}