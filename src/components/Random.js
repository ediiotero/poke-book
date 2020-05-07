import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function Random() {
  const [pokemonList, setPokemonList] = useState([]);

  const getRandomPokemon = () => {
    let numberOfPokemon = 6;
    while (numberOfPokemon > 0) {
      const id = Math.floor(Math.random() * 800);

      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => setPokemonList((prev) => [...prev, data]));

      numberOfPokemon--;
    }
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);
  return pokemonList.length === 6 ? (
    <div>
      {pokemonList.map((e) => (
        <PokemonCard
          key={e.id}
          name={e.name}
          sprite={e.sprites.front_default}
          height={e.height}
          weight={e.weight}
          experience={e.base_experience}
        />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
