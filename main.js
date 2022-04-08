// Constantes:
require('dotenv').config()
const express = require('express')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Stel ejs in als template engine
app.set('view engine', 'ejs') // Ik  heb een engine en dat heet 'ejs'  
app.set('views', './views') // 'Ejs- engine' die kijkt in het mapje 'views' 

// Stel een static map in
app.use(express.static('public')) // In public map zitten alle mappen die ik gebruik voor het stylen van de website:(fonts, img,css,manifest)

// Route for the index
app.get('/', async (req, res)=> {  // ('/' zoekt een url)
  const urlArt = `https://www.rijksmuseum.nl/api/en/collection?key=GnjcnmeH&ps=30`
  const options = {
    method: 'GET'
  }
    const response = await fetch(urlArt, options)
    .then(res => res.json())
    .catch(e => {
      console.error({
        'Error': 'Can not fetch data-API',
        error: e,
      })
    })
    res.render('index', {
      data: response.artObjects
        })
 });

 app.get('/search', async (req, res)=> {  // ('/' searchbar)
  const urlArt = `https://www.rijksmuseum.nl/api/en/collection?key=GnjcnmeH&q=${req.query.q}&ps=100`
  const options = {
    method: 'GET'
  }
    const response = await fetch(urlArt, options)
    .then(res => res.json())
    .catch(e => {
      console.error({
        'Error': 'Can not fetch search-API',
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



