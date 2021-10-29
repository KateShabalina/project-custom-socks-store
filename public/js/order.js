const orderForm = document.getElementById('orderForm')

if (orderForm) {
  orderForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    const { action, address, phone } = event.target

    let res;
    let data;

    try {
      res = await fetch(action, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: address.value,
          phone: phone.value,
        })
      })
    }
    catch (error) {
      return console.log('fetch died');
    }

    try {
      data = await res.json();
      console.log(data);
    }
    catch (error) {
      return console.log('data is not');
    }

    if (!data.isUpdate) {
      return console.log('not update');
    }
    return console.log('update');
  })
}

// const htmlCards = document.getElementsByClassName('card')
// const cards = [...htmlCards]

// cards.forEach(card => {
//   card.addEventListener('submit', async (event) => {
//     event.preventDefault()

//     const countForm = event.target;

//     if (countForm) {

//       const { action, count } = countForm

//       let res;
//       let data;

//       try {
//         res = await fetch(action, {
//           method: "PUT",
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             count: count.value,
//           })
//         })
//       }
//       catch (error) {
//         return console.log('fetch died', data.message);
//       }

//       try {
//         data = await res.json();
//         console.log(data);
//       }
//       catch (error) {
//         return console.log('data is not', data.message);
//       }

//       if (!data.isUpdate) {
//         return console.log('not update', data.message);
//       }
//       return console.log('update', data.message);
//     }

//   })
// })

