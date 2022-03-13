
const REACT_APP_BASE_URL = 'http://localhost:3030/food-corner';

async function createNewRestaurant(formData) {
  const restaurant = await fetch(REACT_APP_BASE_URL + '/restaurants/create', {
    method: 'POST',
    credentials: 'include',
    body: formData
  });
  // return restaurant.json();
}

export { createNewRestaurant }