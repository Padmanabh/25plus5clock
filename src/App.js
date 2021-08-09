
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import TimerLengthControl from './TimerLengthControl'

function App() {
  return (
    <div id="container">
        <div className="main-title">25 + 5 Clock</div>
        <div>
        <TimerLengthControl
          addID="break-increment"
          length={5}
          lengthID="break-length"
          minID="break-decrement"
          onClick={console.log("setBreakLength")}
          title="Break Length"
          titleID="break-label"
        />
        <TimerLengthControl
          addID="session-increment"
          length={25}
          lengthID="session-length"
          minID="session-decrement"
          onClick={console.log("setSessionLength")}
          title="Session Length"
          titleID="session-label"
        /></div>
        <div className="timer">
          <div className="timer-wrapper">
            <div id="timer-label">test</div>
            <div id="time-left">test</div>
          </div>
        </div>
        <div className="timer-control">
          <button id="start_stop" onClick={console.log("start/stop")}>
            <i className="fa fa-play fa-2x" />
            <i className="fa fa-pause fa-2x" />
          </button>
          <button id="reset" onClick={console.log("reset")}>
            <i className="fa fa-refresh fa-2x" />
          </button>
        </div>
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
    </div>
  );
}

export default App;
