const router = require('express').Router();
const { Sock } = require('../db/models');

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

router.post('/', async (req, res) => {
  const { style } = req.body;
  const { id } = req.session.user;
  console.log(style);
  console.log(req.body);
  console.log(req.session.user.id);

  const addToDB = await Sock.create({
    UserId: id,
    color: style
  });

  if (addToDB) {
    res.json({okay: true})
  } else {
    res.json({okay: false})
  }
  
})

module.exports = router;
