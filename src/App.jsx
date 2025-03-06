import React from 'react'
import Navbar from './component/Navbar'
import Pokemoncard from './component/Pokemoncard'
import { PokeProvider } from './context/Pokemoncontext'


const App = () => {
  return (
    <PokeProvider >
     <Navbar/>
    
     <Pokemoncard/>
   
    </PokeProvider>
  )
}

export default App