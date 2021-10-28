const router = require('express').Router();
const { Sock } = require('../db/models');

router.get('/', (req, res) => {
  // console.log(req.session.user.isSession);
  res.render('favourites');
});

// router.get('/', async (req, res) => {
//   const favourites = await Sock.findAll({ where: req.body.isFavourite === true })
//   console.log(favourites);
// })

module.exports = router;
