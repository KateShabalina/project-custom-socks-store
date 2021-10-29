const router = require('express').Router();
const { User, Sock, Order } = require('../db/models');

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
        message: 'Пользователь не найден',
        path: '/cart'
      })
  }
  try {
    socksList = await Sock.findAll({ where: { UserId: user.id, isOrdered: true }, raw: true })
  }
  catch (error) {
    return res
      .status(500)
      .json({
        registration: false,
        message: 'Поле не найдено',
        path: '/cart'
      })
  }
  if (socksList.length <= 0) {
    return res.render('cart', { empty: true, isSession: req.session.user.isSession })
  }
  res.render('cart', { socksList, empty: false, isSession: req.session.user.isSession })
})

router.get('/delete/:id', async (req, res) => {
  const id = +req.params.id
  const isDel = await Sock.destroy({ where: { id } })
  res.redirect('/cart')
})

module.exports = router;
