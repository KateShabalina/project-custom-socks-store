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
        path: '/registration'
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
        path: '/generate'
      })
  }
  if (socksList.length <= 0) {
    return res.render('order', { empty: true, isSession: req.session.user.isSession })
  }
  const count = await Order.sum('count')
  const sum = count * 999
  res.render('order', { socksList, count, sum, empty: false, isSession: req.session.user.isSession })
})

router.post('/', async (req, res) => {
  const email = req.session.user.email;
  const { address, phone } = req.body

  console.log(address, phone);
})


// router.put('/:id/count', async (req, res) => {
//   const email = req.session.user.email
//   const id = req.params.id
//   const { count } = req.body
//   console.log(req.body);
//   let user;
//   let sock;

//   try {
//     user = await User.findOne({ where: { email }, raw: true })
//   }
//   catch (error) {
//     return res
//       .status(500)
//       .json({
//         isUpdate: false,
//         message: 'Пользователь не найден',
//       })
//   }

//   try {
//     sock = await Sock.findAll({ where: { UserId: user.id, isOrdered: true }, raw: true })
//   }
//   catch (error) {
//     return res
//       .status(500)
//       .json({
//         isUpdate: false,
//         message: 'Носок не найден',
//       })
//   }

//   try {
//     [order, isOrder] = await Order.findOrCreate({
//       where: { SockId: id, UserId: user.id },
//       defaults: {
//         UserId: user.id,
//         SockId: id,
//         count,
//         address,
//         phone
//       }
//     })
//     console.log(order);
//     return res
//       .status(200)
//       .json({
//         isUpdate: true,
//         message: `Счетчик товаров обновлен`,
//       })
//   }
//   catch (error) {
//     return res
//       .status(500)
//       .json({
//         isUpdate: false,
//         message: `Счетчик товаров не обновлен`,
//       })
//   }
// })

router.get('/delete/:id', async (req, res) => {
  const id = +req.params.id
  const isDel = await Sock.destroy({ where: { id } })
  res.redirect('/order')
})

module.exports = router;
