const deleteBtns = document.querySelectorAll('.delete-fav-btn');
const pushBasket = document.querySelectorAll('.btn-success');

deleteBtns?.forEach((deleteButton) => {
  deleteButton.addEventListener('click', async (event) => {
    const response = await fetch('/favourites/delete/', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'DELETE',
      body: JSON.stringify({
        id: event.target.id,
      })
    })
    const data = await response.json();
    if (data.isDeleteSuccessful) {
      window.location.href = '/favourites';
    } else {
      alert('something went wrong!')
    }
  });
});

pushBasket?.forEach((pushButton) => {
  pushButton.addEventListener('click', async (event) => {
    const response = await fetch('/favourites', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'PUT',
      body: JSON.stringify({
        id: event.target.id,
      })
    })
    const data = await response.json();
  if (data.okay) {
    alert('НОСКИ ДОБАВЛЕНЫ В КОРЗИНУ!')
  } else {
    alert('NOT OKAY')
  }
  });
});


