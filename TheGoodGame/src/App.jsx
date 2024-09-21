// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetching pokemon data from API
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonDetails = await axios.get(pokemon.url);
            return {
              name: pokemonDetails.data.name,
              image: pokemonDetails.data.sprites.front_default,
              abilities: pokemonDetails.data.abilities.map((ability) => ability.ability.name),
            };
          })
        );
        setPokemons(pokemonData);
        setFilteredPokemons(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    // Filter pokemon based on search query
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [searchQuery, pokemons]);

  return (
    <div className="App">
      <h1>Pokémon Search</h1>
      <SearchBar onSearchChange={setSearchQuery} />
      <div style={styles.cardContainer}>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
            abilities={pokemon.abilities}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default App;
