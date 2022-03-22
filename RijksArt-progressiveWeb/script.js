// Node tonen in een local server
const http = require('http')
const port = 3000
const fs = require('fs')
// render HTML in Node
const server = http.createServer(function(req, res) {
res.writeHead(200, {'Content-Type': 'text/html'})
fs.readFile('index.html', function(error, data){
    if(error){
        res.writeHead(404)
        res.write('Error: File Not Found')
    } 
    else {
        res.write('Hello HTML node')
    }
    res.end()
})
res.write('Hello')
res.end()
})

server.listen(port, function(error) {
if (error) {
    console.log('something went wrong', error)
} else {
    console.log('server is listening on port' + port)
}
})
// 1. The variables [the endpoint] = Data
const endpoint = 'https://www.rijksmuseum.nl/api/en/collection?key=GnjcnmeH&ps=100';
const searchField = document.getElementById('searchField');
const enter = document.getElementById('enter');
const searchForm = document.querySelector('form');
const searchAPI = 'https://www.rijksmuseum.nl/api/nl/collection?key=GnjcnmeH&ps=10&imgonly=true&q=';
let theData;
const username = document.querySelector("username");
const overlay = document.querySelector("overlay");
const titleClass = document.querySelector("titleClass");
const titleShort = document.querySelector("titleShort");
const kunstImg = document.querySelector("kunstImg");
// 2. The user story [user krijgt kunst] Deze functie wordt aangeroepen in punt 3. 

// 3.Functies [Data ophalen en loggen, kunst genereren in HTML] 

// DATA API
// Function requesting data from API & response;
fetch (endpoint)
.then(function(response){
    return response.json()
})
// Function logging the response of requested data 
.then(function(Data) {
    theData = Data;
    console.log(Data);
   
// Function rendering objects in HTML (displaying data on screen)
    for (let i = 0; i <Data.artObjects.length; i++) {
        const  kunstImg = Data.artObjects[i].webImage.url.slice(0, -3)+"=s1000"
        const  kunstTitel = Data.artObjects[i].longTitle
        const  titleShort = Data.artObjects[i].title
        document.querySelector('ol').insertAdjacentHTML(`beforeend` ,`<li>
            <h3 class="titleClass">${kunstTitel}</h3>
            <h2 class="titleShort">${titleShort}</h2>
            <img src="${kunstImg}">
            </li>`
        )  
        console.log(Data.artObjects[i]);              
    }                
})
     
// keyAdvent searchBar
searchField.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase(); // toLowerCase >> to search case sensitive objects (niet hoofdletter gevoelig)

    let newData = theData.artObjects.filter(element => {
        let searchableStrings = `${element.title} ${element.principalOrFirstMaker}`

        if(searchableStrings.toLowerCase().indexOf(searchString) !== -1) {
            return true;
        } else {
            return false;
        }
    })

    let parent = document.querySelector('ol');

    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }

    for (let i = 0; i <newData.length; i++) {
        const  kunstImg = newData[i].webImage.url
        const  kunstTitel = newData[i].longTitle
        const  titleShort = newData[i].title
        document.querySelector('ol').insertAdjacentHTML(`beforeend` ,`<li>
            <h3 class="titleClass">${kunstTitel}</h3>
            <h2 class="titleShort">${titleShort}</h2>
            <img src="${kunstImg}">
            </li>`
        )  
    }   

    console.log(newData)
});

const form = document.querySelector('form');
  e.preventDefault(); // for not reloading the browser >> //  

// !!remove skeleton when objects are loaded!!
// const renderOutput = ({kunstTitel, titleShort, kunstImg}) => {
//     kunstTitel.innerText = '${kunstTitel}';
//     titleShort.innerText = '${titleShort}';
//     kunstImg.innerText = '${kunstImg}';
// };

// kunstTitel.classList.remove("loading");
// titleShort.classList.remove("loading");
// kunstImg.classList.remove("loading");
// --- not completed--