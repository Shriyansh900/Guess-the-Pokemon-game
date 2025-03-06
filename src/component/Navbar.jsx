import React, { useContext } from 'react'
import Pokemoncontext from '../context/Pokemoncontext'

const Navbar = () => {
  const {pokeData} =  useContext(Pokemoncontext)
  return (
    <nav className='bg-gray-900 py-4 md:px-4 px-8'>
     
<span className='flex space-x-1'>
  <h1 className='font-bold text-xl text-white'>Guess</h1>
  <h1 className='font-bold text-xl text-red-500'>Pokemon</h1>
</span>
     </nav>
  )
}

export default Navbar