const axios = require("axios")

const getCharById = function(req, res){
   const params = req.params;

    axios.get(`https://rickandmortyapi.com/api/character/${params}`)
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

// const URL = https://rickandmortyapi.com/api/character

// function getChatById(req, res){
//   const params = req.params;

//   axios.get(`${URL}/:${params}`)
//   .then((response) => response.data)
// }

module.exports = getCharById;