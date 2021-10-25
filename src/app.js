const express = require('express')
const cors = require('cors')
const morgan= require('morgan')
const mysql = require('mysql2/promise')
const app = express()


app.use(morgan('common'))
app.use(cors())
app.use(express.json())
app.listen(3000, console.log('serveris bakery app'))
const dbConfig = require('./dbConfig')
const mainRouter = require("./routes/routes");



// app.get('/register', (req, res) => {
//     console.log('kontaktas');
//     res.send('working')
// })

app.use('/', mainRouter)



