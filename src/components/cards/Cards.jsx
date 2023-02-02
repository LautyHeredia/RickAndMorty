import "./cards.css"
import Card from '../card/Card';

export default function Cards(props) {
   const { characters , onClose} = props;
   return <div className="cards_container">
      {
       characters.map((element,index) => (
         <Card 
            key={index}
            id={element.id}
            name ={element.name}
            species = {element.species} 
            gender={element.gender} 
            image = {element.image} 
            onClose={() => onClose(element.id)} />
         )
       )
      }
   </div>;
}
