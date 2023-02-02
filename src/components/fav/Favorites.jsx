import {connect} from "react-redux"
import "./favorites.css"
import Card from "../card/Card"

export function Favorites({myFavorites}){
 return (
    <div className="container_fav">
       {
            myFavorites?.map((element, index) => {
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
      myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);