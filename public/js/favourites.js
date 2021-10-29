const addFavouriteBtn = document.getElementById('add-favourite-btn');
const addBacketBtn = document.getElementById('add-to-basket-btn');
const addShareBtn = document.getElementById('add-share-btn');

addFavouriteBtn?.addEventListener('click', async (event) => {
  // event.preventDefault();
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
    alert('НОСКИ ДОБАВЛЕНЫ В ИЗБРАННОЕ!')
  } else {
    alert('NOT OKAY')
  }
  // window.location.href = '/favourites';
});

addBacketBtn?.addEventListener('click', async (event) => {
  const style = document.querySelector('.sockMain').outerHTML;
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
    alert('НОСКИ ДОБАВЛЕНЫ В КОРЗИНУ!')
  } else {
    alert('NOT OKAY')
  }

  // window.location.href = '/favourites';
});

addShareBtn?.addEventListener('click', async (event) => {
  alert(`ПОДЕЛИСЬ ЭТОЙ ССЫЛКОЙ: ${document.URL} C ДРУЗЬЯМИ!`)
}
);
