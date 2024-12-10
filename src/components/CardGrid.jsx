import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import '../styles/CardGrid.css';

export default function CardGrid({
  score,
  changeScore,
  highScore,
  changeHighScore,
}) {
  const [spriteList, setSpriteList] = useState([]);
  const [clickedId, setClickedId] = useState([]);

  useEffect(() => {
    //spriteListay of pokemon that will be used in the URL send to the API
    const pokemonspriteListay = [
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

    //Recieves all fetch requests as Promises then resolves them returning an spriteListay containg a link to the image
    const getImages = async () => {
      const spritespriteListay = await Promise.all(
        pokemonspriteListay.map(async (pokemon, index) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
          );
          const json = await response.json(); // Resolve the Promise and place the fetched data into the json variable
          return {
            sprite: json.sprites.other['official-artwork'].front_default,
            name: pokemon,
            key: index,
          }; // Returns the sprite from the json as a Promise
        })
      );

      setSpriteList(spritespriteListay);
    };

    getImages();
  }, []); // Function will only run once (on mount)

  const shuffle = () => {
    //Randomly shuffles array when a card is clicked
    const shuffled = [...spriteList];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setSpriteList(shuffled);
  };

  return (
    <div className="card-grid">
      {spriteList.map((card) => {
        return (
          <Card
            sprite={card.sprite}
            name={card.name}
            key={card.key}
            id={card.key}
            shuffle={shuffle}
            clicked={clickedId}
            setClicked={setClickedId}
            score={score}
            changeScore={changeScore}
            highScore={highScore}
            changeHighScore={changeHighScore}
          />
        );
      })}
    </div>
  );
}
