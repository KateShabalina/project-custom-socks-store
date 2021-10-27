const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// **MainPage**
router.get('/', (req, res) => {
  if (!req.session.user) {
    return res.render('index')
  }
  res.render('index', { isSession: req.session.user.isSession })
})

// **Registration**

router.get('/registration', (req, res) => {
  res.render('registration');
})

router.post('/registration', async (req, res) => {
  const { username, email, firstPassword, secondPassword } = req.body

  let isCreated

  if (firstPassword !== secondPassword) {
    return res
      .status(400)
      .json({
        registration: false,
        message: 'Введенные пароли не совпадают',
        path: '/registration'
      })
  }

  try {
    [_, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { username, email, password: await bcrypt.hash(firstPassword, 10) }
    })
  }
  catch (error) {
    return res
      .status(500)
      .json({
        registration: false,
        message: 'Что-то пошло не так, попробуйте перезагрузить страницу',
        path: '/registration'
      })
  }

  if (!isCreated) {
    return res
      .status(400)
      .json({
        registration: false,
        message: 'Пользователь с таким email уже существует',
        path: '/registration'
      })
  }

  req.session.user = {
    username,
    email,
    isSession: true,
    isRegistration: true
  }

  res
    .status(201)
    .json({
      registration: true,
      message: 'Регистрация прошла успешно, новый пользователь создан',
      path: '/'
    })
})

//**Login**
router.get('/login', (req, res) => res.render('login'));

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  let isUser;
  let isCorrectPassword;


  try {
    isUser = await User.findOne({ where: { email }, raw: true })
  }
  catch (error) {
    return res
      .status(500)
      .json({
        registration: false,
        message: 'Пользователь с таким email не существует, вернитесь и пройдите регистрацию',
        path: '/login'
      })
  }
  if (!isUser) {
    return res
      .status(500)
      .json({
        registration: false,
        message: `Пользователь с таким email не существует, вернитесь и пройдите регистрацию`,
        path: '/login'
      })
  }
  try {
    isCorrectPassword = await bcrypt.compare(password, isUser.password)
  }
  catch (error) {
    return res
      .status(500)
      .json({
        registration: false,
        message: `Пароль введен неверно`,
        path: '/login'
      })
  }

  if (!isCorrectPassword) {
    return res
      .status(500)
      .json({
        registration: false,
        message: 'Неверный пароль',
        path: '/login'
      })
  }

  req.session.user = {
    username: isUser.username,
    email: isUser.email,
    isSession: true,
    isRegistration: true
  }
  res
    .status(200)
    .json({
      registration: true,
      message: `Добро пожаловать, ${isUser.username}`,
      path: '/'
    })
})

//*Logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.render('main', { isSession: req.session.user.isSession })
    }
    res.redirect('/')
  });
})


module.exports = router;