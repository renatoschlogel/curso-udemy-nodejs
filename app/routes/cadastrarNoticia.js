module.exports = function(app){
    app.get('/cadastrar-noticia', function (req, res) {
        res.render('admin/form_add_noticia');
    });
}
