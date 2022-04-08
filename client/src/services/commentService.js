const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function newComment(id, comment) {
  try {
    const res = await fetch(REACT_APP_BASE_URL + `/restaurants/${id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(comment),
    });
    return res.json();
  } catch (error) {
    throw new Error(error)
  }
}

export { newComment }