const express = require('express');
const app = express();

app.set('view engine', 'ejs');


function convertToHtml (conteudo){
    return "<html><body>" + conteudo + "</body></html>"
}
app.get('/', function (req, res) {
   res.send(convertToHtml("Site de Noticias")); 
});

app.get('/tecnologia', function (req, res) {
    res.render('sessao/tecnologia');
});

app.listen(3000, function () {
    console.log('Servidor rodando com Express');
});
