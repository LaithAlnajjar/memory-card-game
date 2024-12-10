import '../styles/Card.css';

export default function Card({
  name,
  sprite,
  shuffle,
  id,
  clicked,
  setClicked,
  score,
  changeScore,
  highScore,
  changeHighScore,
}) {
  const handleClick = () => {
    shuffle();
    console.log(clicked, id);
    if (clicked.includes(id)) {
      setClicked([]);
      changeScore(0);
    } else {
      setClicked([...clicked, id]);
      changeScore(score + 1);
      if (score + 1 > highScore) {
        changeHighScore(score + 1);
      }
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={sprite} alt={name + ' Sprite'} />
      <p className="card-label">{name}</p>
    </div>
  );
}
