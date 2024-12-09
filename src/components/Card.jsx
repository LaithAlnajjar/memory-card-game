export default function Card({ name, sprite }) {
  return (
    <div className="card">
      <img src={sprite} alt={name + ' Sprite'} />
      <p className="card-label">{name}</p>
    </div>
  );
}
