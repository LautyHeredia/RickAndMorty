import { ADD_FAVORITES, DELETE_FAVORITES, ORDER, FILTER } from "./type";

export function addFavorites(personaje){
    return {
        type: ADD_FAVORITES,
        payload: personaje
    }
} 

export function deleteFavorites(id) {
    return {
       type: DELETE_FAVORITES,
       payload: id 
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}

export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}