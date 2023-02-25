import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./type";

const initialState = {
   myFavorites: [],
   allfavorites: [],
   myFavoritesCopy: [],
   allCharacters: [], 
}

function rootReducer(state= initialState, actions){
  switch (actions.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload],
        myFavoritesCopy: [...state.myFavoritesCopy, actions.payload],
        allfavorites: [...state.allfavorites, actions.payload]
      }
    case DELETE_FAVORITES:
      return {
        ...state,
       myFavorites: state.myFavorites.filter((e) => e.id !== actions.payload ) ,
      }
    case FILTER:
      if(actions.payload === "all") {
        return {
          ...state,
          myFavorites: state.allfavorites
        }
      }
     const coporder = state.myFavoritesCopy 
     const filtred = coporder.filter((e) => e.gender === actions.payload)
      return{
       ...state,
       myFavorites: filtred
      } 
      case ORDER: 
      const copyOrder = state.myFavorites
      if(actions.payload === "Descendiente")  {
        const order = copyOrder.sort((a, b) => {
          if (a.id > b.id) {
            return -1
          }else if(b.id > a.id){
            return 1  
          }else return 0
         })
         return {
           ...state,
           myFavorites: order
         }
        } else if(actions.payload === "Ascendiente") {
          const order = copyOrder.sort((a, b) => {
            if (a.id > b.id) {
              return 1
            }else if(b.id > a.id){
              return -1  
            }else return 0
           })
           return {
             ...state,
             myFavorites: order
           }
        }
    default:
        return {
          ...state
        }
  }
}

export default  rootReducer;