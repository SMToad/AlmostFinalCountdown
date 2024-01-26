import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title ="Baby steps" targetTime={1}/>
        <TimerChallenge title ="Mid" targetTime={5}/>
        <TimerChallenge title ="Kinda hard" targetTime={10}/>
        <TimerChallenge title ="Xtra hard" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
