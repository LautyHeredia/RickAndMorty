import { ADD_FAVORITES, DELETE_FAVORITES } from "./type";

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
