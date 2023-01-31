import "./card.css"
import Contador from "../contador/Contador.jsx"
import { Link } from "react-router-dom";

export default function Card(props) {
  const {name, species, gender, image, onClose} = props;      
   return (
      <div className="card_container">
        <div className="card2_container"> 
         <div className="contador_container">
          <Contador className="contador" numero={0}/>
         <button className="butonClose" onClick={onClose}>X</button>
         </div>
         <Link to={`/DetailCard/${props.id}`}> 
           <h2 className="H2_1">{name}</h2>
         </Link>
         <img class="img_card" src={image} alt={name} />
         <h2 className="H2_2">{species}</h2>
         <h2 className="H2_3">{gender}</h2>
      </div>
     </div> 
   );
}
