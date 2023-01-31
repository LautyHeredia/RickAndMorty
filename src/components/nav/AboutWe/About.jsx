import "./about.css"

export default function About() {
 return ( 
     <div className="container_div">
        <div className="container_titleH1">
           <div className="container_h1"> 
             <h1 className="h1">My First App</h1>
           </div>
               <div className="container_h"> 
                 <h2 className="h2_1">Page create for : Lautaro Heredia</h2>           
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
                      Primero, la página es dinamica, creada con " React, JavaScript, Css y Html. "<br/>
                      Ahora si.. <br/><br />
                      La página funciona de la siguiente manera: <br/> <br />
                       1. Te diríges al search y pones un "ID", luego pulsas "AddCard", por ahora sólo funciona de esta manera. <br />
                       2. Se te agregará una "Card" , luego puedes darle "Me Gusta" pulsando en el corazón y automáticamente suma los likes, además de que puedes eliminar la card  clickeando en el "X" .<br/>
                       3. Puedes seguir agregando las "Cards" que desées y jugando con ellas . <br />
                       4. Puedes navegar en "Details Cards", donde encontrarás mas información detallada sobre las "Cards" y en "About We" , que ésta última es dónde te encuentras.. <br/>
                       5. Y ademas, aquí abajo tienes la sección de FOOTER, donde encontrarás mis datos de contácto. 

                      ...SALUDOSSS !!!  
                     </p>   
                   </div>
             </div>
         </div> 
    </div>
  ) 
}