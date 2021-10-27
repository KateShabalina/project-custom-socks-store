const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('generate-socks');
})

module.exports = router;