import '../styles/Card.css';

export default function Card({
  name,
  sprite,
  shuffle,
  id,
  clicked,
  setClicked,
}) {
  const handleClick = () => {
    shuffle();
    setClicked([...clicked, id]);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={sprite} alt={name + ' Sprite'} />
      <p className="card-label">{name}</p>
    </div>
  );
}
