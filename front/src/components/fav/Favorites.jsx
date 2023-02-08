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

       </div>,

       {
            myFavorites.map((element, index) => {
             return ( 
             <div>
              <Card 
                key={index}
                id={element.id}
                name ={element.name}
                species = {element.species} 
                gender={element.gender} 
                image = {element.image} 
                onClose={() => element.onClose(element.id)} />
             </div>
              // <div>
              //  <h3>{elemento.id}</h3>,
              //  <h3>{elemento.name}</h3>,
              //  <h3>{elemento.species}</h3>,
              //  <h3>{elemento.gender}</h3>,
              //  <h3> <img src={elemento.image} alt={elemento.name}></img></h3>,
              //  <h3>{elemento.onClose}</h3>,
              // </div>
             )
             })
          }
    </div>
  )
}

export function mapStateToProps(state){
    return {
      myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);