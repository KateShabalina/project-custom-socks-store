const addFavouriteBtn = document.getElementById('add-favourite-btn');

addFavouriteBtn?.addEventListener('click', async (event) => {
  const response = await fetch('/generate', { // потому что перехватываю я на generate
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: event.target.title.value,
      body: event.target.body.value
    })
  });
});
