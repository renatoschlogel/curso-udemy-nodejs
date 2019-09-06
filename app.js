let app = require('./config/server');

let rotaHome = require('./app/routes/home')(app);
let rotaNoticias = require('./app/routes/noticias')(app);
let rotaCadastrarNoticia = require('./app/routes/cadastrarNoticia')(app);



function convertToHtml (conteudo){
    return "<html><body>" + conteudo + "</body></html>"
}





app.listen(3000, function () {
    console.log('Servidor rodando com Express:');
});
