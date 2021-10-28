// Server config
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionFileStore = require('session-file-store');

const mainRouter = require('./routes/mainRouter');
const generateRouter = require('./routes/generateRouter')
const favouritesRouter = require('./routes/favouritesRouter')
const cartRouter = require('./routes/cartRouter')

const FileStore = sessionFileStore(session);
const sConfig = {
  name: 'uSID',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'SECRET',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: 1000 * 60 * 60,
  },
};

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sConfig));

app.use('/', mainRouter);
app.use('/generate', generateRouter);
app.use('/favourites', favouritesRouter);
app.use('/cart', cartRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
