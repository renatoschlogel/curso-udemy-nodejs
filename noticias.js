var http = require('http');

var server = http.createServer(function(req, res){
    var categoria = req.url;

    var noticias = "categoria " + categoria + " não encontrada!";

    if(categoria == '/esporte'){
        noticias = 'Nosticias sobre o esporte!';
    }else if(categoria == '/tecnologia'){
        noticias = 'Nosticias sobre o tecnologia!';
    } 

    res.end("<html><body>" + noticias + "</body></html>");

}).listen(3000);