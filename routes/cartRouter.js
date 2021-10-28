const router = require('express').Router();
const { User, Sock } = require('../db/models');

router.get('/', async (req, res) => {
  const email = req.session.user.email;

  let user;
  let socksList;

  try {
    user = await User.findOne({ where: { email }, raw: true })
  }
  catch (error) {
    return res
      .status(500)
      .json({
        registration: false,
        message: 'Что-то пошло не так, попробуйте перезагрузить страницу',
        path: '/cart'
      })
  }
  try {
    socksList = await Sock.findAll({ where: { UserId: user.id } })
  }
  catch (error) {
    return res
      .status(500)
      .json({
        registration: false,
        message: 'Что-то пошло не так, попробуйте перезагрузить страницу',
        path: '/cart'
      })
  }
  if (socksList.length <= 0) {
    return res.render('cart', { empty: true })
  }
  res.render('cart', { socksList, empty: false })
})

router.get('/delete/:id', async (req, res) => {
  const id = +req.params.id
  const isDel = await Sock.destroy({ where: { id } })
  res.redirect('/cart')
})

module.exports = router;
