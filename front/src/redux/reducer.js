import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./type";

const initialState = {
   myFavorites: [],
   allCharacters: [] 
}

function rootReducer(state= initialState, actions){
  switch (actions.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload],
        allCharacters: [...state.myFavorites] 
      }
    case DELETE_FAVORITES:
      return {
        ...state,
       myFavorites: state.myFavorites.filter((e) => e.id !== actions.payload )  
      }
    case FILTER:
     const coporder = [...state.allCharacters] 
     const filtred = coporder.filter((e) => e.gender === actions.payload)
      return{
       ...state,
       myFavorites: filtred
      } 
    case ORDER: 
      const copyOrder = [...state.allCharacters]
      const order = copyOrder.sort((a, b) => {
      
        if (a.id > b.id) {
          return 'Ascendiente' === actions.payload ? 1 : -1
        }
        if (a.id < b.id) {
          return 'Descendiente' === actions.payload ? 1 : -1
        }
        return 0
       })
      return {
        ...state,
        myFavorites: order
      }
      
    default:
        return {
          ...state
        }
  }
}

export default  rootReducer;