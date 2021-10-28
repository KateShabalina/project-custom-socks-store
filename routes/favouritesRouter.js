const router = require('express').Router();
const { User, Sock } = require('../db/models');

// router.get('/', (req, res) => {
//   // console.log(req.session.user.isSession);
//   res.render('favourites');
// });

router.get('/', async (req, res) => {
  const email = req.session.user.email;
  let user = await User.findOne({ where: { email }, raw: true });
  console.log(req.session);
  let listFavourites = await Sock.findAll({
    where: { UserId: req.session.user.id, isFavourite: true },
  })
  console.log(listFavourites);
  if (listFavourites.length <= 0) {
    return res.render('favourites', { empty: true });
  }
  res.render('favourites', { listFavourites, empty: false });
})

module.exports = router;
