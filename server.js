const express = require("express");
const expressHbs = require('express-handlebars');
const Post = require('./models/Post')
const app = express();
app.use(express.static('public'));

// ------------- express-handlebars -------------

app.engine('hbs', expressHbs.engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: null,
    extname: 'hbs'
  })
);

app.set('view engine', 'hbs');
app.set('views', 'views');
// ------------- rotas -------------

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/sobre', (req, res) => {
    res.render('sobre')
})


// ------------- ativador do servidor -------------

app.listen(8000, function () {
    console.log("Servidor rodando na url http://localhost:8000 ");
});