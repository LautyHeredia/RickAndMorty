import { useState} from "react"; 
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./detail.css"

export default function Detail(){
 const {id} = useParams();
 const [character, setCharacter] = useState("");

 useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return ( 
    <div className="container_listas">
     
      <div className="contenedor_listas_1">
        <h1>Description Card</h1>
          <ul className="container_li">   
             <div className="idems">
                <li>Name: {character.name}</li>,
                <li>Status: {character.status}</li>,
                <li>Especie: {character.species}</li>,
                <li>Genero: {character.gender}</li>,
                <li>Origin: {character.origin?.name}</li>
              </div>
               
            <img src={character.image} alt="--" />
          </ul>
      </div>
    
    </div>
  )
}