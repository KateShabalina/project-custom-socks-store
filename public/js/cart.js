const countForm = document.getElementById('countForm');

if (countForm) {
  countForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { action, count } = event.target

    let res;
    let data;

    try {
      res = await fetch(action, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          count: count.value,
        })
      })
    }
    catch (error) {
      return console.log('fetch died', data.message);
    }

    try {
      data = await res.json();
      console.log(data);
    }
    catch (error) {
      return console.log('data is not', data.message);
    }

    if (!data.isUpdate) {
      return console.log('not update', data.message);
    }
    return console.log('update', data.message);
  })
}