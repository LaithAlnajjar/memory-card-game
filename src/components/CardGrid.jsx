import { useState, useEffect } from 'react';
import Card from './Card.jsx';

export default function CardGrid() {
  const [spriteList, setSpriteList] = useState([]);

  useEffect(() => {
    //Array of pokemon that will be used in the URL send to the API
    const pokemonArray = [
      'charmander',
      'vulpix',
      'growlithe',
      'squirtle',
      'poliwag',
      'horsea',
      'bulbasaur',
      'oddish',
      'exeggcute',
      'magnemite',
      'forretress',
      'bronzor',
    ];

    //Recieves all fetch requests as Promises then resolves them returning an array containg a link to the image
    const getImages = async () => {
      const spriteArray = await Promise.all(
        pokemonArray.map(async (pokemon, index) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
          );
          const json = await response.json(); // Resolve the Promise and place the fetched data into the json variable
          return {
            sprite: json.sprites.front_default,
            name: pokemon,
            key: index,
          }; // Returns the sprite from the json as a Promise
        })
      );

      setSpriteList(spriteArray);
    };

    getImages();
  }, []); // Function will only run once (on mount)

  return (
    <>
      {spriteList.map((card) => {
        return <Card sprite={card.sprite} name={card.name} key={card.key} />;
      })}
    </>
  );
}
