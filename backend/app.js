require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');


const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://' + process.env.LINK_MONGODB + '@cluster0.fuhqo.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  //Header pour contourner erreurs de CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(cors());


app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;