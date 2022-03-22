
const REACT_APP_BASE_URL = 'http://localhost:3030/food-corner';

async function createNewRestaurant(formData) {
  const restaurant = await fetch(REACT_APP_BASE_URL + '/restaurants/create', {
    method: 'POST',
    credentials: 'include',
    body: formData
  });
  return restaurant.json();
}

async function getOwnRestaurants() {
  const restaurants = await fetch(REACT_APP_BASE_URL + '/restaurants/by-owner', {
    method: 'GET',
    credentials: 'include'
  });
  return restaurants.json();
}

async function getAllRestaurants() {
  const restaurants = await fetch(REACT_APP_BASE_URL + '/restaurants', {
    method: 'GET',
    credentials: 'include'
  });
  return restaurants.json();
}

async function getRestaurantById(id) {
  const restaurants = await fetch(REACT_APP_BASE_URL + `/restaurants/${id}`, {
    method: 'GET',
    credentials: 'include'
  });
  return restaurants.json();
}

export { createNewRestaurant, getOwnRestaurants, getAllRestaurants, getRestaurantById }