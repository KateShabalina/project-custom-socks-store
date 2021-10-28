const regForm = document.getElementById('regForm');
const regModal = document.getElementById('regModal')
const logForm = document.getElementById('logForm')
const loginModal = document.getElementById('loginModal')

if (regForm) {

  regForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const {
      action, method, username, email, firstPassword, secondPassword
    } = event.target

    let res;
    let data;

    try {
      res = await fetch(action, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          firstPassword: firstPassword.value,
          secondPassword: secondPassword.value,
        })
      })
    }
    catch (error) {
      regModal.innerHTML = `<div class="mt-3 alert" style="text-align: center" role="alert">Что-то пошло не так, попробуйте перезагрузить страницу</div>`
    }

    try {
      data = await res.json();
    }
    catch (error) {
      regModal.innerHTML = `<div class="mt-3 alert" style="text-align: center" role="alert">${data.message}</div>`
    }

    if (res && data.registration) {
      regModal.innerHTML = `<div class="mt-3 alert" style="text-align: center" role="alert">${data.message}</div>`
      window.setTimeout(() => window.location.href = data.path, 1500)
    }
    regModal.innerHTML = `<div class="mt-3 alert" style="text-align: center" role="alert">${data.message}</div>`
  })
}

if (logForm) {
  logForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const { action, method, email, password } = event.target

    let res;
    let data;

    try {
      res = await fetch(action, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      })
    }
    catch (error) {
      loginModal.innerHTML = `<div class="mt-3 alert" style="text-align: center" role="alert">Что-то пошло не так, попробуйте перезагрузить страницу</div>`
    }

    try {
      data = await res.json();
    }
    catch (error) {
      loginModal.innerHTML = `<div class="mt-3 alert" style="text-align: center" role="alert">${data.message}</div>`
    }
    if (data.registration) {
      loginModal.innerHTML = `<div class="mt-3 alert" style="text-align: center" role="alert">${data.message}</div>`
      window.setTimeout(() => window.location.href = data.path, 1500)
    }
    loginModal.innerHTML = `<div class="mt-3 alert" style="text-align: center" role="alert">${data.message}</div>`
  })
}
