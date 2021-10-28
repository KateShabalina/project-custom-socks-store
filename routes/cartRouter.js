const router = require('express').Router();
const { Sock } = require('../db/models');

router.get('/', async (req, res) => {
  
  let isUser;
  let goodsList;
  

  try {
    goodsList = await Sock.findAll()
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
  if (!goodsList.length > 0) {
    return res.render('cart', { empty: true })
  }
  res.render('cart', { goodsList, empty: false })
})

module.exports = router;