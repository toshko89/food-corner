const REACT_APP_BASE_URL = 'http://localhost:3030/food-corner';


async function register(email, password, rePass) {
  const user = await fetch(REACT_APP_BASE_URL + '/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password, rePass })
  });
  return user.json();
}

async function login(email, password) {
  const user = await fetch(REACT_APP_BASE_URL + '/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  });
  return user.json();
}

async function logout() {
  const response = await fetch(REACT_APP_BASE_URL + '/users/logout', {
    method: 'GET',
    credentials: 'include',
  });
  return response;
}

async function changeUserData(userId, userData) {
  try {
    const response = await fetch(REACT_APP_BASE_URL + `/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ userId, userData })
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export { register, login, logout, changeUserData }