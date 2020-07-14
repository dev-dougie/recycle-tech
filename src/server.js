const express = require('express')
const server = express()

//cath db

const db = require('./database/db')


//set public path
server.use(express.static("public"))


//set the req.body use
server.use(express.urlencoded({extended: true}))


//using engine template
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//set path
//index
//get  "call" with the http
//req ->  requisition
//res -> response 
server.get("/", (req, res) => {
        //sending something
        return res.render("index.html", {title: "Descarte de equipamentos eletrônicos de forma inteligente."})
})

server.get("/cadastro-ponto", (req, res) => {
    //sending something

    //URL query string 

     return res.render("cadastro-ponto.html")
})

server.post('/savepoint', (req, res) => {



return res.send('Cadastro confirmado')
    
})





server.get("/procurar", (req, res) => {
    //sending something
    db.all('SELECT * FROM locais', function(err, rows){
        if(err){
            return console.log(err)
        }

        const total = rows.length;
        //show html page with datas 
        return res.render("search-results.html", {locais: rows, total: total})
    })
      
})


//turn on the server
server.listen(3000)