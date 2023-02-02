import "./card.css"
import Contador from "../contador/Contador.jsx"
import { Link } from "react-router-dom";
import {addFavorites, deleteFavorites} from "../../redux/actions"
// import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Card(props) {   
 const { id, name, species, gender, image, onClose} = props;
  const [isFav, setFav] = useState(false);
  const dispatch = useDispatch();
  const {myFavorites} = useSelector ((state) => {return state} )

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if(fav.id === id){
        setFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite= (props)=> {
    if(isFav){
      setFav(false);
      dispatch(deleteFavorites(props.id)); 
    }else{
      setFav(true);
      dispatch(addFavorites(props));
    }
  }

   return (
    console.log(myFavorites),
    // console.log("aca las props", props),
      <div className="card_container">
        <div className="card2_container"> 
         <div className="contador_container">
          <Contador className="contador" numero={0}/>
         {
          isFav ? (
           <button onClick={() => handleFavorite(props)}>⭐</button>
          ) : (
           <button onClick={() => handleFavorite(props)}>🏐</button>
          )
         }
         <button className="butonClose" onClick={onClose}>X</button>
         </div>
         <Link to={`/DetailCard/${id}`}> 
           <h2 className="H2_1">{name}</h2>
         </Link>
         <img class="img_card" src={image} alt={name} />
         <h2 className="H2_2">{species}</h2>
         <h2 className="H2_3">{gender}</h2>
      </div>
     </div> 
   );
}

// export function mapDispatchToProps(dispatch){
//   return {
//     addFavorites: (personaje) => {
//       dispatch(addFavorites(personaje))
//     },
//     deleteFavorites: (id) => {
//       dispatch(deleteFavorites(id))
//     }
//   }
// }

// export function mapStateToProps(state){
//  return {
//   myFavorites: state.myFavorites
//  }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Card);
export default Card;
