import {addFavorites, deleteFavorites} from "../../redux/actions"
import Contador from "../contador/Contador.jsx"
import { Link } from "react-router-dom";
import "./card.css"
// import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Card(props) {   
 const { id, name, species, gender, image, onClose} = props;
  const [isFav, setFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

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
           <Contador numero={0}/>
         {
           isFav ? (
           <button className="button_fav" onClick={() => handleFavorite(props)}>⭐</button>
          ) : (
           <button className="button_fav" onClick={() => handleFavorite(props)}>🏐</button>
          )
        }
         </div>
         <button className="butonClose" onClick={onClose}>X</button>
         <Link to={`/DetailCard/${id}`}> 
           <h2 className="H2_1">{name}</h2>
           <img class="img_card" src={image} alt={name} />
           <h2 className="H2_2">{species}</h2>
           <h2 className="H2_3">{gender}</h2>
         </Link>
      </div>
     </div> 
   );
}

export default Card;
