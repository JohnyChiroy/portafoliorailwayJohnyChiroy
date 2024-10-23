const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'visual')));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contactos', (req, res) => {
  res.render('contactos');
});

app.get('/habilidades', (req, res) => {
  res.render('habilidades');
});

app.get('/educacion', (req, res) => {
  res.render('educacion');
});

app.get('/pro1', (req, res) => {
  res.render('pro1');
});

app.get('/pro2', (req, res) => {
  res.render('pro2');
});

app.get('/pro3', (req, res) => {
  res.render('pro3');
});

app.get('/pro4', (req, res) => {
  res.render('pro4');
});

app.get('/pro5', (req, res) => {
  res.render('pro5');
});

app.get('/pro6', (req, res) => {
  res.render('pro6');
});

app.get('/pro7', (req, res) => {
  res.render('pro7');
});

app.get('/pro8', (req, res) => {
  res.render('pro8');
});

app.get('/portafolio', (req, res) => {
  res.render('portafolio');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
  