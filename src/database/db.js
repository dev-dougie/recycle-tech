//creating a db
const sqlite3 = require('sqlite3').verbose()
//initialize the db object 
const db = new sqlite3.Database('./src/database/database.db')

module.exports =db

//using the db objects
/*db.serialize(() => {
    //creating a table with sql commands
    db.run(`
            CREATE TABLE IF NOT EXISTS locais (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                number TEXT,
                image TEXT,
                address TEXT,
                number NUMBER,
                state TEXT,
                city TEXT,
                items TEXT
            );
    `)


    //insert datas
    const query = `
        INSERT INTO locais (
        name,
        image,
        address,
        number,
        state,
        city,
        items
    ) values (?,?,?,?,?,?,?);
` 
    const values = ["Instituto Gea-Ética e Meio Ambiente",
    "https://icdn2.digitaltrends.com/image/digitaltrends/technological-waste.jpg",
    "R. Sampaio Viana",
    "190",
    "São Paulo",
    "Paraíso",
    "Computadores e periféricos"]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log('Cadastrado com sucesso')
        console.log(this)
    }

    db.run(query, values, afterInsertData)


    //checking datas
     db.all('SELECT name FROM locais', function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log('Here are your registers')
        console.log(rows)
    })*/


    //delete datas
    db.run('DELETE * FROM locais WHERE id = ?', [1], function(err)
    {
        if(err){return console.log(err)}
        console.log("Registro deletado com sucesso");
    })
//})
