import { useState } from 'react';
import CardGrid from './components/CardGrid.jsx';
import './styles/App.css';
import Scoreboard from './components/Scoreboard.jsx';

function App() {
  const [curScore, setCurScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Scoreboard score={curScore} highScore={highScore} />
      <CardGrid
        score={curScore}
        changeScore={setCurScore}
        highScore={highScore}
        changeHighScore={setHighScore}
      />
    </>
  );
}

export default App;
