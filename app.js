require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require("express-session");
const MongoStore   = require("connect-mongo")(session);
const passport     = require("passport");   

mongoose
  .connect('mongodb://localhost/terralaboris', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); 
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

app.use(session({
  secret: "basic-auth-secret",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
  ttl: 2 * 60 * 60 // 2-hour sessions

  }));
// attaching session data to res.locals, 
// making it available to all hbs files after this middleware
app.use(function(req,res,next) {
  if(req.session.currentUser) res.locals.user = req.session.currentUser;
  next();
})

// Protect routes

function protectRoute(req, res, next){
  if(req.session.currentUser){ // <== if there's user in the session (user is logged in)
    next();
    // ==> go to the next route ---
  } else {
    res.redirect('/login');
  }
}


// Routes
app.locals.title = 'Terra Laboris';

const search = require('./routes/main/search');
const about = require('./routes/main/about');
const signup = require('./routes/user/signup');
const login = require('./routes/user/login');
const logout = require('./routes/user/logout');
const add = require('./routes/jurisprudence/jurisprudence-add');
const all = require('./routes/jurisprudence/jurisprudence-all');
const itemDelete = require('./routes/jurisprudence/jurisprudence-delete');
const single = require('./routes/jurisprudence/jurisprudence-single');
const edit = require('./routes/jurisprudence/jurisprudence-edit');

/*----upload-----*/

var multer = require("multer");
let upload = multer({ dest: "public/images" });

// app.use('/uploads', upload.single("upload"), require('./routes/jurisprudence/jurisprudence-add'));
// app.use('/uploads', require("./routes/jurisprudence/jurisprudence-all"));


app.use('/', search);
app.use('/about', about);
app.use('/signup', signup);
app.use('/login', login);
app.use('/jurisprudence-all', all);
app.use('/jurisprudence-single', single);
app.use('/logout', protectRoute, logout);
app.use('/jurisprudence-add', upload.single("upload"), protectRoute, add);
app.use('/jurisprudence-delete', protectRoute, itemDelete);
app.use('/jurisprudence-edit', protectRoute, edit);






module.exports = app;
