const mysql = require("mysql2/promise");
const dbConfig = require("./dbConfig");


function labas(req, res) {
    console.log('req.body')
    // const {name, email, pass1} = req.body
    // console.log('gavom useri', user)
    // const conn = mysql.createConnection(dbConfig);
    // const sql = `
    //     INSERT INTO users (full_name, email, password)
    //     VALUES (?, ?, ?)
    //     `;
    // conn.execute(sql, [name, email, pass1], (err, result) => {
    //     if(err) return console.log('err', err);
    //     console.log('user created', result);
    //     res.send({msg: 'irasas pavyko', result: result});
    // })
    // conn.end()

    res.send({msg: 'zinios is controllerio'})
}




module.exports = {labas}