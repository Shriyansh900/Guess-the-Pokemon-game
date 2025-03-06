import React, { useContext, useEffect } from 'react'
import Form from './Form'
import Score from './Score'
import Pokemoncontext from '../context/Pokemoncontext'
import fetchPokemon from '../context/PokeService'


const Pokemoncard = () => {

 const {pokemon,chances, dispatch} =  useContext(Pokemoncontext)

 const getPokemon = async() => {
  const random = Math.floor(Math.random() * 100)
  const data = await  fetchPokemon(random)
  dispatch({
    type: "GET_POKEMON",
    payload: data
  })
  

 }
 
 useEffect(()=> {
 getPokemon()
 
 if(chances == 0){
  window.alert("Game Over !!")
  window.location.reload()
 }

 },[chances])

 if(!pokemon){
  return <h1 className='my-5 text-center text-black font-bold'>Loading...</h1>
 }


  return (
    <>
    <div className="card bg-gray-800 h-screen  p-5  flex items-center justify-center flex-col">
     <h1 className='text-2xl font-bold my-5'> which pokemon is this ... <span className='text-red-500'>?</span> </h1>
   
        <img className="my-5 blur-sm w-50" src={pokemon.image} />
    
     
      
      <Score/>
      <Form/>
     
     </div>
    </>
  )
}


// {`${image?.sprites?.other?.dream_world?.front_default}`}
export default Pokemoncard