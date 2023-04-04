const express = require('express');
// const bodyParser = require('body-parser');
const articleRouter = require('./routes/articles')
const app = express();
// app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')

app.use('/articles',articleRouter)

app.get('/', function(req,res){
    res.render('index');
})

app.listen(5000);