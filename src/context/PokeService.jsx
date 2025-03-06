const pokemons = [
  "pikachu", "charizard", "bulbasaur", "squirtle", "jigglypuff", "meowth", "psyduck", "snorlax", "eevee", "mewtwo",
  "mew", "charmander", "wartortle", "blastoise", "venusaur", "pidgey", "rattata", "raichu", "sandshrew", "ninetales",
  "zubat", "golbat", "oddish", "gloom", "vileplume", "diglett", "dugtrio", "machop", "machoke", "machamp",
  "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite",
  "magneton", "doduo", "dodrio", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar",
  "onix", "drowzee", "hypno", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee",
  "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea",
  "seadra", "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx", "electabuzz", "magmar",
  "pinsir", "tauros", "gyarados", "lapras", "ditto", "vaporeon", "jolteon", "flareon", "porygon", "omanyte",
  "omastar", "kabuto", "kabutops", "aerodactyl", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite",
  "tyranitar", "blaziken", "garchomp", "lucario", "greninja", "decidueye", "zacian", "zamazenta", "rayquaza", "giratina"
];



 const fetchPokemon = async(random) => {

  
  console.log("fecthe pokemon");
  
  
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons[random]}`)
    const data =  await response.json();
    const name = data.name;
    const image = data.sprites.other.dream_world.front_default;
   return {image, name};
}

export default fetchPokemon