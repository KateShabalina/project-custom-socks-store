const router = require('express').Router();
// const { Sock } = require('../db/models');

router.get('/', (req, res) => {
  res.render('generate-socks');
});

// router.get('/', async (req, res) => {
//   const id = +req.params.id;
//   // const sock = await Sock.findOne({ where: { id: req.params.id } });
//   const updateSock = await Sock.update({ isFavourite: true }, {
//     where: { id: req.params.id },
//   })
//   res.json();
// })

module.exports = router;
