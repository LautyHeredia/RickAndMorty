const axios = require("axios")

const getCharById = function(res, id){
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
        const characters= {    
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        image: data.image
    } 
     res.writeHead(200, {"Content-Type": "application/json"}),
     res.end(JSON.stringify(characters));      
    }).catch((error) => {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(error.message)
    })  

}

module.exports = getCharById;