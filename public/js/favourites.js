const addFavouriteBtn = document.getElementById('add-favourite-btn');
const addBacketBtn = document.getElementById('add-favourite-btn');

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
    alert('Носок добавлен в избраное')
  } else {
    alert('NOT OKAY')
  }
  // window.location.href = '/favourites';
});

addBacketBtn?.addEventListener('click', async (event) => {
  const style = document.querySelector('.sockMain').outerHTML;
  alert('neeeeeet')
  const response = await fetch('/generate/basket', {
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
    alert('Носок добавлен в корзину')
  } else {
    alert('NOT OKAY')
  }
 
  // window.location.href = '/favourites';
});

