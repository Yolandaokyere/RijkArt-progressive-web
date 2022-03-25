// Constantes:
require('dotenv').config()

const express = require('express')
const app = express()

const http = require('http')
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const { format } = require('date-fns');
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
const { required } = require('nodemon/lib/config');
const { v4: uuid } = require('uuid');
console.log(uuid())

// Stel ejs in als template engine
app.set('view engine', 'ejs') // ejs-extinctie zoekt de mappen
app.set('views', './views')

// Stel een static map in
app.use(express.static('public')) // In de public map zitten alle mappen die ik gebruik voor het stylen van de website 

// Route for the index
app.get('/', function (req, res) {  // ('/' zoekt een url in dit geval mijn idex.ejs)
    res.render('index', {
      pageTitle: 'Dit is een express pagina',
    })
  })

// const logEvents = require('./logEvents');
app.set('port', process.env.PORT || 3500) // const PORT = process.env.PORT || 3500; // Server is running on PORT const = x. If 'x' is not available PORT= 3500

const server = app.listen(app.get('port'), function () {
  console.log(`Application started on port: ${app.get('port')}`)
})

