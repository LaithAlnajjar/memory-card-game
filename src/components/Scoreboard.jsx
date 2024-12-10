export default function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <p className="score">
        {' '}
        <span className="score-label">Current Score:</span> {score}{' '}
      </p>
      <p className="scire">
        {' '}
        <span className="score-label"> High Score:</span> {highScore}
      </p>
    </div>
  );
}
