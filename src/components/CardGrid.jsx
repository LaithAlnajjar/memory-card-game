import { useState, useEffect } from 'react';

export default function CardGrid() {
  const [spriteList, setSpriteList] = useState([]);
  //   const [cardList, setCardList] = useState([]);

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

    //Recieves all fetch requests as promises then resolves them returning an array containg a link to the image
    const getImages = async () => {
      const spriteArray = await Promise.all(
        pokemonArray.map(async (pokemon) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
          );
          const json = await response.json();
          return json.sprites.front_default;
        })
      );

      setSpriteList(spriteArray);
    };

    getImages();
  }, []);

  return (
    <>
      {spriteList.map((sprite, index) => (
        <img key={index} src={sprite} />
      ))}
    </>
  );
}
