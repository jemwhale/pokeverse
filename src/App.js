import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, FormControl } from 'react-bootstrap';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  // function getPokemon(){
  //   try{
  //     const res = fetch(pokeApi);
  //     const data = res.json();
  //     setPokemonList(data.results);
  //   }catch{
  //     console.log('Error fetching pokemon');
  //   }
  // }

  useEffect (()=>{
    fetch(pokeApi).then((response)=>response.json()).then((data)=>{setPokemonList(data.results)}).catch((error)=>{console.error(error)})
    // getPokemon();
  },[]);

  return (
    <div data-testid="app">
      <Navigation />
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Text id="search">Search</InputGroup.Text>
          <FormControl placeholder="Pokemon" aria-label="Pokemon" aria-describedby='basic-addon1'/>
        </InputGroup>
      {pokemonList.map((pokemon, index)=>{
        return <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
      })}
      </Container>
    </div>
  );
}

export { App };
