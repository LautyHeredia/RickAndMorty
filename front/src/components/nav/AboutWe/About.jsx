import "./about.css"
import { Link } from "react-router-dom"

export default function About() {
 return ( 
     <div className="container_div">
        <div className="container_titleH1">
           <div className="container_h1"> 
             <h1 className="h1">My First App</h1>
           </div>
               <div className="container_h"> 
                 <h2 className="h2_1">Creator of the page : Lautaro Heredia</h2>           
               </div>
        </div>  
        <div className="container_informacion">
            <div className="container_parrafo">
               <div className="container_h3">
                 <h3 className="h3_1">Información de la página</h3>
                </div>
                   <div className="container_p">
                     <p className="p1"><b>Bienvenidos a mi primer página web de Rick And Morty.</b> <br/><br/>
                      Es un gusto presentarles, la funcionalidad de la misma.<br/>
                      Primero, la página es dinamica, creada con "<strong> React, Redux, JavaScript, Css y Html </strong>. "<br/>
                      Ahora si.. <br/><br />
                      <strong>La página funciona de la siguiente manera: </strong><br/> <br />
                       <strong>1.</strong> Te diríges al search y pones un "ID", luego pulsas "AddCard", por ahora sólo funciona de esta manera. <br />
                       <strong>2.</strong> Se te agregará una "Card" , luego puedes darle "Me Gusta" pulsando en el corazón , automáticamente suma los likes y podes agregar a favoritos la Card que más te guste, además de que puedes eliminar la card  clickeando en el "X" .<br/>
                       <strong>3.</strong> Si clickeas en cualquier parte de la Card puedes acceder a la descripcion de esta misma <br/>
                       <strong>4.</strong> Puedes visualizar tus cards agregadas a "Favoritos", yendo a la sección en el nav, que tiene este mismo nombre "Favoritos"; <br/>
                       <strong>3.</strong> Puedes seguir agregando las "Cards" que desées y jugando con ellas . <br />
                       <strong>4.</strong> Puedes navegar en "Details Cards", donde encontrarás mas información detallada sobre las "Cards" y en "About We" , que ésta última es dónde te encuentras.. <br/>
                       <strong>5.</strong> Y ademas, aquí abajo tienes la sección de FOOTER, donde encontrarás mis datos de contácto. 

                      ...SALUDOSSS !!!  
                     </p>   
                   </div>
             </div>
             <div className="containerDelFooter">
          <h2>Mis redes sociales 🔜</h2>
         <footer>
             <ul className="containerFooter">
              <Link to={"https://www.instagram.com/lauti_heredia_edu/"}>
                <li>Instagram</li>
              </Link>
              <Link to={"https://www.youtube.com/channel/UC2esjscDoyQowJLfYVqMokQ"}>
                <li>YouTube</li>
              </Link>
              <Link to={"https://github.com/LautyHeredia"}>
                <li>GitHub</li>
              </Link>
             </ul>
          </footer>        
        </div> 
         </div>
    </div>
  ) 
}