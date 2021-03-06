const router = require('express').Router();
const { User, Sock } = require('../db/models');

router.get('/', async (req, res) => {
  const email = req.session.user.email;
  let user = await User.findOne({ where: { email }, raw: true });

  let listFavourites = await Sock.findAll({
    where: { UserId: req.session.user.id, isFavourite: true },
  })

  if (listFavourites.length <= 0) {
    return res.render('favourites', { empty: true, isSession: req.session.user.isSession });
  }
  res.render('favourites', { listFavourites, empty: false, isSession: req.session.user.isSession });
})

router.delete('/delete', async (req, res) => {
  const id = +req.body.id;
  const toDel = await Sock.findOne({ where: { id } });
  try {
    const deleted = await toDel.destroy();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ isDeleteSuccessful: false })
  }
  return res.json({ isDeleteSuccessful: true });
})

router.put('/', async (req, res) => {
  const id = +req.body.id;
  const toCart = await Sock.findOne({ where: { id } });
  try {
    const updateDb = await toCart.update({
      isOrdered: true
    },
    {where: { id } }
    );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ okay: false })
  }
  return res.json({  okay: true });
})

module.exports = router;
