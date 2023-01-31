import './App.css'
import Cards from './components/cards/Cards'
import { useState } from 'react'
import Nav from "./components/nav/Nav"
import { Routes, Route } from 'react-router-dom'
import About from "./components/nav/AboutWe/About"
import Detail from "./components/nav/DetailCard/Detail"
import Form from "./components/form/Form"
import {useLocation } from "react";
import {useNavigate} from "react";

function App () {
   const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [acces, setAcces] = useState(false);
  const username = "lautaro12heredia@gmail.com";
  const password = "lauty182227";

  useEffect(() => {
   !acces && navigate("/");
  },[acces]);

  function login(userData){
   if(userData.username === username && userData.password){
     setAcces(true);  
     navigate(/home);
   }
  }

  const handleSubmit = (e) =>{
   e.preventDefault();
  }

  function onSearch(character) {
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
   location.pathname !== "/" && <Nav onSearch={onSearch}/> 
  }  
    <Routes> 
      <Route path='/' element={<Form login ={login}/>}/>
       <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> } />
       <Route path="/DetailCard/:id" element={<Detail />} />
       <Route path="/AboutWe" element={<About />} />
    </Routes>
    </div>
  )
}

export default App
