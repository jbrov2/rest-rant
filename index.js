require('dotenv').config()
const express = require('express')
const app = express()


//BEGINNING MIDDLEWARE SECTION
//adding jsx
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())







//adding controller

app.use('/places', require('./controllers/places'))

app.get('/', (req,res) => {
    res.render('home')
})

app.get('*', (req,res) => {
    res.render('error404')
})



app.listen(process.env.PORT)