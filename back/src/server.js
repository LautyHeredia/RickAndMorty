const http = require("http");
const characters = require("./utils/data.js")

http.createServer(function(req, res){

    res.setHeader('Access-Control-Allow-Origin', '*');

    let charac = req.url.split("/");
    const id = Number(charac.pop());

    let link = charac.join("/");

    if(link === `/rickandmorty/character`){
     const personaje = characters.find(e =>  e.id === id);
       if(personaje){ 
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(personaje));
       }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("No existe ese Id ingresado");
       } 
    }

}).listen(3001, "localhost");