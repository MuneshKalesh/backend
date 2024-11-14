require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello! World!!!')
})

app.get('/twitter', (req,res) => {
    res.send('Munesh kalesh')
}) 

app.get('/login', (req,res)=>{
    res.send('Login page')
})
app.get('/youtub', (req,res)=>{
  res.send('<h2>hello hello </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})