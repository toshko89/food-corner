const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function createNewRestaurant(formData) {
  try {
    const restaurant = await fetch(REACT_APP_BASE_URL + '/restaurants/create', {
      method: 'POST',
      credentials: 'include',
      body: formData
    });
    return restaurant.json();
  } catch (error) {
    throw new Error(error)
  }
}

async function getOwnRestaurants() {
  try {
    const restaurants = await fetch(REACT_APP_BASE_URL + '/restaurants/by-owner', {
      method: 'GET',
      credentials: 'include'
    });
    return restaurants.json();
  } catch (error) {
    throw new Error(error)
  }
}

async function getAllRestaurants() {
  try {
    const restaurants = await fetch(REACT_APP_BASE_URL + '/restaurants', {
      method: 'GET',
      credentials: 'include'
    });
    return restaurants.json();
  } catch (error) {
    throw new Error(error)
  }
}

async function editRestaurnat(restaurantId, formData) {
  console.log(restaurantId);
  try {
    const restaurant = await fetch(REACT_APP_BASE_URL + `/restaurants/${restaurantId}`, {
      method: 'PUT',
      credentials: 'include',
      body: formData
    });
    return restaurant.json();
  } catch (error) {
    throw new Error(error)
  }
}

async function getRestaurantById(id) {
  try {
    const restaurants = await fetch(REACT_APP_BASE_URL + `/restaurants/${id}`, {
      method: 'GET',
      credentials: 'include'
    });
    return restaurants.json();
  } catch (error) {
    throw new Error(error)
  }
}

export { createNewRestaurant, getOwnRestaurants, getAllRestaurants, getRestaurantById, editRestaurnat }