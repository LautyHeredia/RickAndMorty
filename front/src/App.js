import './App.css'
import Cards from './components/cards/Cards'
import Nav from "./components/nav/Nav"
import { Routes, Route } from 'react-router-dom'
import About from "./components/nav/AboutWe/About"
import Detail from "./components/nav/DetailCard/Detail"
import Form from "./components/form/Form"
import {useEffect, useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import Favorites from './components/fav/Favorites'
import Nav2 from './components/nav/Nav2'

function App () {
  const navigatee = useNavigate();
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [acces, setAcces] = useState(false);

  useEffect(() => {
   !acces && navigatee("/");
  },[acces]);


  const login = () => {
     setAcces(true);
     navigatee("/home");
  }
  // const login = (userData)=>{
  //  if(userData.username === username && userData.password === password){
  //    setAcces(true);  
  //    navigatee("/home");
  //  }
  // }


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) =>{
   setCharacters((characte)=>{
   return characte.filter((element) =>
      element.id !== id
    )
   })
 }

  return (
  <div className='App' style={{ padding: '25px' }}>
  {
   location.pathname === "/home" && <Nav onSearch={onSearch}/> 
  }  
  {
   location.pathname !== "/home" && location.pathname !== "/" && <Nav2/>
  }
    <Routes> 
      <Route path='/' element={<Form login={login}/>}/> {/*Aca le paso por props a Form el login={login}*/}
       <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> } />
       <Route path="/DetailCard/:id" element={<Detail />} />
       <Route path='/Favorites' element={<Favorites />} />
       <Route path="/AboutWe" element={<About />} />
    </Routes>
    </div>
  )
}

export default App;
