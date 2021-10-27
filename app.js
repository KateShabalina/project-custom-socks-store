// Server config
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const favouritesRouter = require('./routes/favourites.route')

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/favourites', favouritesRouter);

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
