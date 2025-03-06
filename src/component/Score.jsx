import React, { useContext } from 'react'
import Pokemoncontext from '../context/Pokemoncontext'

const Score = () => {

  const {score, chances} = useContext(Pokemoncontext)
  
  return (
    <div className="score w-full flex justify-between my-4 px-4">
      <h1>Your Score:{score}</h1>
      <h1>left Turns:{chances}</h1>
      </div>
  )
}

export default Score