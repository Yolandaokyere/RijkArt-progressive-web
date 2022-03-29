// Constantes:
require('dotenv').config()
const express = require('express')
const app = express()
// mod.cjs
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// const http = require('http')
// const path = require('path');
// const fs = require('fs');
// const fsPromises = require('fs').promises;

// Data loggen
const { format } = require('date-fns');
console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
const { required } = require('nodemon/lib/config');
const { v4: uuid } = require('uuid');
console.log(uuid())

// Stel ejs in als template engine
app.set('view engine', 'ejs') // Ik  heb een engine en dat heet 'ejs'  
app.set('views', './views') // 'Ejs- engine' die kijkt in het mapje 'views' 

// Stel een static map in
app.use(express.static('public')) // In public map zitten alle mappen die ik gebruik voor het stylen van de website:(fonts, img,css,manifest)

// Route for the index
app.get('/', async (req, res)=> {  // ('/' zoekt een url)
  const urlArt = `https://www.rijksmuseum.nl/api/en/collection?key=GnjcnmeH&ps=100`
  const options = {
    method: 'GET'
  }
    const response = await fetch(urlArt, options)
    .then(res => res.json())
    .catch(e => {
      console.error({
        'message': 'oh no',
        error: e,
      })
    })
    // console.log(response)
    res.render('index', {
      data: response.artObjects
        })
 });

 app.get('/search', async (req, res)=> {  // ('/' searchbar)
  const urlArt = `https://www.rijksmuseum.nl/api/en/collection?key=GnjcnmeH&q=${req.query.q}&ps=10`
  const options = {
    method: 'GET'
  }
    const response = await fetch(urlArt, options)
    .then(res => res.json())
    .catch(e => {
      console.error({
        'message': 'oh no',
        error: e,
      })
    })
console.log(response)
    res.render('index', {
      data: response.artObjects
        })
 });
  
// const logEvents = require('./logEvents');
app.set('port', process.env.PORT || 3500) // const PORT = process.env.PORT || 3500; // Server is running on PORT const = x. If 'x' is not available PORT= 3500

const server = app.listen(app.get('port'), function () {
  console.log(`Application started on port: ${app.get('port')}`)
})



