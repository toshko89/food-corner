const REACT_APP_BASE_RESTRAURANTS_URL = 'http://localhost:3030/food-corner/restaurants';

async function createNewRestaurant(newRestaurantData) {
  const restaurant = await fetch(REACT_APP_BASE_RESTRAURANTS_URL + '/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRestaurantData)
  });
  return restaurant.json();
}

export { createNewRestaurant }