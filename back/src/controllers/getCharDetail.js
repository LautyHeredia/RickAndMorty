const axios = require("axios");

const getCharDetail = function(req, res){
   const params = req.params; 
    axios.get(`https://rickandmortyapi.com/api/character/${params}`)
    .then((response) => response.data)
    .then((data) => {
     const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data.origin,
        species: data.specie,
    }  
     res.writeHead(200, {"Content-Type": "application/json"});
     res.end(JSON.stringify(character));      
    }).catch((error) => {
       res.writeHead(500, {"Content-Type" : "text/plain"})
       res.end(error.message) 
    })  
}

module.exports = getCharDetail;