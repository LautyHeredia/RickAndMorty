import { ADD_FAVORITES, DELETE_FAVORITES } from "./type";

const initialState = {
   myFavorites: [] 
}

function rootReducer(state= initialState, actions){
  switch (actions.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload] 
      }
    case DELETE_FAVORITES:
      return {
        ...state,
       myFavorites: state.myFavorites.filter((e) => e.id !== actions.payload )  
      }
      
    default:
        return {
          ...state
        }
  }
}

export default  rootReducer;