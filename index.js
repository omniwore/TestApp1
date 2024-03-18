require('dotenv').config()

const express = require('express')
const app = express()
port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('omniwore@twitter')
})

app.get('/ayush', (req,res)=>{
    res.send('<h1> Ayush Kumar </h1> <h2> SDE at Brane Group </h2> <p> Loves to code and build things </p>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})