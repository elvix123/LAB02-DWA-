const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros');
});

app.get('/servicios', (req, res) => {
  res.render('servicios');
});

app.get('/clientes', (req, res) => {
  res.render('clientes');
});

app.get('/contacto', (req, res) => {
  res.render('contacto');
});

app.post('/contacto', (req, res) => {
  res.render('confirmacion');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
