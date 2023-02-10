import {connect} from "react-redux"
import "./favorites.css"
import Card from "../card/Card"
import { orderCards, filterCards } from "../../redux/actions"
import { useDispatch } from "react-redux"

export function Favorites({myFavorites}){

  const dispatch = useDispatch();

  function handleClick(evento){
    console.log(evento.target.value + "ascendiente")
    dispatch(orderCards(evento.target.value));
  }

  function handleFilter(evento){
    dispatch(filterCards(evento.target.value));
  }

 return (
    <div className="container_fav"> 
    <div className="container_select">
      <h1>Ordenar por :</h1>
     <div className="container_select1">
          <select className="select_1" onChange={handleClick}>
              <option value="Ascendiente">Ascendiente</option>
              <option value="Descendiente">Descendiente</option>
          </select>
          <select className="select_2"  onChange={handleFilter}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknow</option>
          </select>
       </div>
    </div>
       <div className="container_cardd">
          {
            myFavorites.map((element, index) => {
             return ( 
              <Card 
                key={index}
                id={element.id}
                name ={element.name}
                species = {element.species} 
                gender={element.gender} 
                image = {element.image} 
                onClose={() => element.onClose(element.id)} />
                )
              })
            }
        </div>
    </div>
  )
}

export function mapStateToProps(state){
    return {
      myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);