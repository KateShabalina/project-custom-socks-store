const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('favourites');
})

module.exports = router;
