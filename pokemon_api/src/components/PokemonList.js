import React, {useEffect ,useState} from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {
                setPokemonList(response.data.results);
            })
            .catch((err) => console.log(err));
        }, []);
    

    return (
        <div>
            <h1>Pokemon List With Axios</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default PokemonList;