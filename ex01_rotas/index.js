const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Seja bem vindo ao meu app!')
})

app.get('/sobre', function(req, res){
    res.send('Minha página sobre!')
})

app.get('/blog', function(req, res){
    res.send('Bem vindo ao meu blog!')
})

// Linhas que definem a porta do localhost
app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081')
})