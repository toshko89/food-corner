
const REACT_APP_BASE_URL = 'http://localhost:3030/food-corner'


async function register(email, password, rePass) {
  const user = await fetch(REACT_APP_BASE_URL + '/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, rePass })
  });
  return user.json();
}

export { register }