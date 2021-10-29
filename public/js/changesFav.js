const deleteBtns = document.querySelectorAll('.delete-fav-btn');

deleteBtns?.forEach((deleteButton) => {
  deleteButton.addEventListener('click', async (event) => {
    console.dir(event.target);
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

