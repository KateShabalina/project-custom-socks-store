// const addFavouriteBtn = document.getElementById('add-favourite-btn');

addFavouriteBtn?.addEventListener('click', async (event) => {
  const style = document.querySelector('.sockMain').outerHTML;

  const response = await fetch('/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      style,
    })
  });
  const data = await response.json();
  if (data.okay) {
    alert('okay')
  } else {
    alert('NOT OKAY')
  }
  // window.location.href = '/favourites';
});

