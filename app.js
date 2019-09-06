const express = require('express');
const msg = require('./moduloTeste')();
const app = express();

app.set('view engine', 'ejs');


function convertToHtml (conteudo){
    return "<html><body>" + conteudo + "</body></html>"
}
app.get('/', function (req, res) {
    res.render('home/index');
});

app.get('/formulario_inclusao_noticia', function (req, res) {
    res.render('admin/form_add_noticia');
});

app.get('/noticias', function (req, res) {
    res.render('noticias/noticias');
});

app.listen(3000, function () {
    console.log('Servidor rodando com Express:', msg);
});
