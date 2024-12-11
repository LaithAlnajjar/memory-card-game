import { useState } from 'react';
import Header from './components/Header.jsx';
import CardGrid from './components/CardGrid.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import './styles/App.css';

function App() {
  const [curScore, setCurScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header />
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
