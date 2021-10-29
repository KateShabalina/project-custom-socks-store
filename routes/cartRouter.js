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
    socksList = await Sock.findAll({ where: { userId: user.id, isOrdered: true }, raw: true })
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
    return res.render('cart', { empty: true })
  }
  res.render('cart', { socksList, empty: false })
})

router.post('/', (req, res) => {

})

router.put('/:id/count', async (req, res) => {
  const email = req.session.user.email
  const id = req.params.id
  const { count } = req.body

  let user;
  let sock;
  let order;

  try {
    user = await User.findOne({ where: { email }, raw: true })
    // console.log(user);
  }
  catch (error) {
    return res
      .status(500)
      .json({
        isUpdate: false,
        message: 'Пользователь не найден',
      })
  }

  try {
    sock = await Sock.findAll({ where: { userId: user.id, isOrdered: true }, raw: true })
    // console.log(sock);
  }
  catch (error) {
    return res
      .status(500)
      .json({
        isUpdate: false,
        message: 'Носок не найден',
      })
  }

  try {
    order = await Order.update({ count }, { where: { sockId: id, userId: user.id } })
    console.log(order);
    return res
      .status(200)
      .json({
        isUpdate: true,
        message: `Счетчик товаров обновлен`,
      })
  }
  catch (error) {
    return res
      .status(500)
      .json({
        isUpdate: false,
        message: `Счетчик товаров не обновлен`,
      })
  }
})


//Вопрос про удаление, я забыл, ловить кнопку на клиенте или можно иначе?
router.get('/delete/:id', async (req, res) => {
  const id = +req.params.id
  const isDel = await Sock.destroy({ where: { id } })
  res.redirect('/cart')
})

module.exports = router;
