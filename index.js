require('dotenv').config()
const express = require('express')

const app =express()

const port =4000 

app.get('/',(req, res )=> {
     res.send('hello world!')
})

app.get('/twitter',(req, res)=> {
    res.send('anvi@com')
})

app.get('/login',(re,rs)=>{
    rs.send('https://expressjs.com/en/starter/hello-world.html')
})
app.listen(process.env.port||port, () => {
    console.log(`example app listening on port ${port}`)
})