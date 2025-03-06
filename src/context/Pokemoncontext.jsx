import { createContext, useReducer } from "react";
import PokemonReducer from "./PokemonReducer";


const Pokemoncontext = createContext();

export const PokeProvider = ({children}) => {

const initialState = {
   pokemon:null,
    score : 10,
    chances : 3
}

const [state,dispatch] = useReducer(PokemonReducer,initialState)

         return(
            <Pokemoncontext.Provider value={{...state,dispatch}}>{children}</Pokemoncontext.Provider>
         )
}

export default Pokemoncontext;