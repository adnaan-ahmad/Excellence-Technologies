const fetch = require('node-fetch')

const apiUrl = 'https://landsqr.herokuapp.com/api/v1/properties'    

const api = (apiUrl) => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
}
api(apiUrl)
