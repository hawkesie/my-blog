const express = require('express');
const songRouter = require('./routes/songs')
const app = express();

app.set('view engine', 'ejs')

app.use('/songs',songRouter)

app.get('/', function(req,res){
    const songs = [{
        title: 'Roses',
        artist: 'St Jhn',
        createdAt: new Date(),
        lyrics: 'I walk in the corner with the body screaming dolo',
    },


]
    res.render('songs/index',{ songs: songs });
})

app.listen(5000);