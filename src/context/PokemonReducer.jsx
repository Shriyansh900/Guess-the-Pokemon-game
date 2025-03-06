const PokemonReducer = (state,action) => {
     switch(action.type){
      
          case "GET_POKEMON":
               return{
                    ...state,
                    pokemon: action.payload
               }

          case "INCREASE_SCORE" :
               return{
                    ...state,
                    score: state.score + 10
               }    
          case "DECREASE_CHANCES" :
               return{
                    ...state,
                    chances: state.chances -1
               }  
        default:
            return state
     }
}


export default PokemonReducer;