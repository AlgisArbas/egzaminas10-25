const express = require('express')
const cors = require('cors')
const morgan= require('morgan')
const mysql = require('mysql2/promise')
const app = express()


app.use(morgan('common'))
app.use(cors())
app.use(express.json())
app.listen(3000, console.log('serveris egzaminas'))
const dbConfig = require('./dbConfig')
// const mainRouter = require("./routes/routes");

// app.post('/register', (req, res) => {
//     const user = req.body
//     console.log('gavom useri', user)
//     const conn = mysql.createConnection(dbConfig);
//     const sql = `
//         INSERT INTO users (full_name, email, password)
//         VALUES (?, ?, ?)
//         `;
//     conn.execute(sql, [user.name, user.email, user.pass1], (err, result) => {
//         if(err) return console.log('err', err);
//         console.log('user created', result);
//         res.send({msg: 'irasas pavyko'});
//     })
//     conn.end()
//     console.log('front OK')
//     res.send({msg: 'irasas pavyko'});
// })

// app.get('/register', (req, res) => {
//     console.log('kontaktas');
//     res.send('working')
// })

app.use('/', mainRouter)



