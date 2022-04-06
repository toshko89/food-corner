const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function sendOrder(orderData) {
  console.log(orderData);
  try {
    const order = await fetch(REACT_APP_BASE_URL + '/orders/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(orderData),
    });
    return order.json();
  } catch (error) {
    throw new Error(error)
  }
}

export {
  sendOrder
}