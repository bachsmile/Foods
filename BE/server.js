require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser= require('body-parser');
const cookieParser = require('cookie-parser');
const ProductController = require('./controllers/ProductController');
const route = require('./routers')
const error = require('res-error')
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});


const app = express();
const port = 4000;

const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECSION_SECRET));
app.use(error);
// Authorization
app.use(cors());
app.use(function(req, res, next) {
  res.header('application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

route(app);

app.options('*', cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

