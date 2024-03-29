import { useState, useRef } from "react";

export default function Player() {
  let playerName = useRef();
  let [enteredPlayerName, setEnteredPlayerName] = useState('');
  
  function handleOnClick(){
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
