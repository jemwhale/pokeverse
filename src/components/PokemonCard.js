import React, { useEffect, useState  } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokemonCard({ url, name }) {

  const pokeApiPokemon = {url};

  const [pokemon, setPokemon] = useState([]);

  // function getAPokemon(){
  //   try{
  //     const res = fetch(url);
  //     const data = res.json();
  //     // console.log(data)
  //     setPokemon(data);
  //   }catch{
  //     console.log('Error fetching a pokemon');
  //   }
  // }
  
  useEffect(()=>{
    fetch(url).then((response)=>response.json()).then((data)=>{setPokemon(data)}).catch((error)=>{console.error(error)})
    // getAPokemon();
  },[])

  return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text as="div">
          <ul>
            {pokemon.abilities.map((ability)=>{
              return <li key={ability.ability.name}>{ability.ability.name}</li>
            })}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
