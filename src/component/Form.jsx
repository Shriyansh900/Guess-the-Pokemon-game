import React, { useContext, useState } from 'react'
import Pokemoncontext from '../context/Pokemoncontext'
import fetchPokemon from '../context/PokeService'


const Form = () => {

  const getPokemon = async() => {
    const random = Math.floor(Math.random() * 100)
    const data = await  fetchPokemon(random)
    dispatch({
      type: "GET_POKEMON",
      payload: data
    })
    
  
   }
  const [answer, setAnswer] = useState("")
  const {pokemon, dispatch} =  useContext(Pokemoncontext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(pokemon.name === answer){
     dispatch({
      type: "INCREASE_SCORE"
     })
      getPokemon()
    }else{
      dispatch({
        type: "DECREASE_CHANCES"
       })
      
    }
    setAnswer("")
  }
 

  return ( 
   
    <form className=' w-full flex items-center justify-center flex-col' onSubmit={handleSubmit}>
      <div className="flex justify-between w-140">
   
      </div>
      
        <input type="text" placeholder='Enter Pokemon name here...'  
        onChange={(e)=> setAnswer(e.target.value)}
       value={answer}
        className='border px-2  py-1 border-white bg-gray-700 text-white  rounded-sm w-full'/>

        <button className='bg-red-500 
        hover:bg-red-400 text-white px-4 my-2 py-2 rounded-lg w-full text-lg font-semibold '>Submit</button>
      </form>
  )
}

export default Form