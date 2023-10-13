const express = require('express')
const app = express()
const path = require('path')


app.listen(4000, () => {
    console.log("servidor corriendo en puerto 4000")
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.use(express.static('public'))