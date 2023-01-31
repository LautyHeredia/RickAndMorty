import { useState } from "react";
import "./search.css"

export default function SearchBar(props) {
  const {onSearch} = props; 
  const [id, setId] = useState("");

  function butonId(evento){
   setId(
      evento.target.value
      );
  }

  const handleSubmit = (evento) =>{
    evento.preventDefault();

    if(Object.keys(id).length){
      evento.target.reset();
    }
  }

   return (
      console.log(id),
      <form className="search_container" onSubmit={handleSubmit}>
         <input onChange={butonId} type='search' placeholder="Escribe aqui.."/>
         <button type="submit" onClick={() => onSearch(id)}>AddCard</button>
      </form>
   );
}
