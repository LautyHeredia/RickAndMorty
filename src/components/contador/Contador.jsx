import { useState } from "react"
import "../contador/contador.css"

function ShowCount(props){
    return (
        <div className="span_Container">
         <span>{props.numero}</span>
        </div>
    )
}

export default function Contador({numero}){
   const [contador, setNumero] = useState(numero);  

   const buttonClick = () => {
    setNumero(contador + 1)
   }

  return (
    <div className="button_container">        
    <button className="button" onClick={buttonClick}>❤️</button>
    <ShowCount numero={contador} />
    </div>

  )

}
