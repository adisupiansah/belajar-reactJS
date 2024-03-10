/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './components/Header';


function App() {

  const [likes, setLikes] = useState(0);

 
  function handleClick() {
      setLikes(likes + 1);
  }

  return (
      <>
          <Header name="Adi Supiansah"/>
          

          <button onClick={handleClick}>Like {likes}</button>

      </>
  );
}

export default App
