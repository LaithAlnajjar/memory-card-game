import { useState, useEffect } from 'react';
import './styles/App.css';
import CardGrid from './components/CardGrid.jsx';

function App() {
  const [image, setImage] = useState();

  return (
    <>
      <CardGrid />
    </>
  );
}

export default App;
