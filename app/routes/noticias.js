module.exports = function(app){
    

    app.get('/noticias', function (req, res) {

        let mysql = require('mysql');
        let connection = mysql.createConnection({
            host: 'db',
            user: 'root',
            password: '123.456',
            database: 'portal_noticias'
        });

        let consulta = 'select * from noticia';
        connection.query(consulta, function (error, result) {
            res.send(result);
        });
        // res.render('noticias/noticias');
    });
}
