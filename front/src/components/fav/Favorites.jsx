import {useSelector} from "react-redux"
import "./favorites.css"
import Card from "../card/Card"
import { orderCards, filterCards } from "../../redux/actions"
import { useDispatch } from "react-redux"
import React, { useEffect, useState } from "react"

export default function Favorites(){

  const dispatch = useDispatch();

  const [favourites, setFavourites] = useState([])
  const [order, setOrder] = useState("")
  const fav = useSelector(state => state.myFavorites)
  
  useEffect(()=>{
    setFavourites(fav)
  },[fav])

  function handleClick(evento){
    dispatch(orderCards(evento.target.value));
    setOrder(`Order ${evento.target.value}`)
  }

  function handleFilter(evento){
    dispatch(filterCards(evento.target.value));

  }

 return (
    <div className="container_fav"> 
    <div className="container_select">
      <h1>Ordenar por :</h1>
     <div className="container_select1">
          <select className="select_1" onChange={handleClick}>
              <option value="Ascendiente">Ascendiente</option>
              <option value="Descendiente">Descendiente</option>
          </select>
          <select className="select_2"  onChange={handleFilter}>
               <option value="all">all</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknow</option>
          </select>
       </div>
    </div>
       <div className="container_cardd">
          {
            favourites?.map((element, index) => {
             return ( 
              <Card 
                key={index}
                id={element.id}
                name ={element.name}
                species = {element.species} 
                gender={element.gender} 
                image = {element.image} 
                onClose={() => element.onClose(element.id)} />
                )
              })
            }
        </div>
    </div>
  )
}