
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import TimerLengthControl from './TimerLengthControl'
import { useState, useEffect } from 'react';

function App() {
  const accurateInterval = function (fn, time) {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date().getTime() + time;
    timeout = null;
    wrapper = function () {
      nextAt += time;
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      return fn();
    };
    cancel = function () {
      return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
      cancel: cancel
    };
  };

  const CONSTANTS = {
    SESSION: "SESSION",
    BREAK: "BREAK",
    SESSION_LENGTH: 60,
    BREAK_LENGTH: 60
  }
  const initialState = {
    breakLength: 5,
    sessionLength: 25,
    timerState: CONSTANTS.STOPPED,
    timerType: CONSTANTS.SESSION,
    timeLimit: 25 * 60,
    timerRunning: false,
    timeout: null
  }
  const [state, setState] = useState(initialState)
  const handleDecrement = (mode) => {
    if (!state.timerRunning) {
      const newSessionLength = mode === CONSTANTS.SESSION ? state.sessionLength > 1 ? state.sessionLength - 1 : 1 : state.sessionLength;
      const newBreakLength = mode === CONSTANTS.BREAK ? state.breakLength > 1 ? state.breakLength - 1 : 1 : state.breakLength;
      const newTimeLimit = state.timerType === CONSTANTS.SESSION ? newSessionLength * 60 : newBreakLength * 60;
      setState(prev => ({
        ...prev, sessionLength: newSessionLength, breakLength: newBreakLength, timeLimit: newTimeLimit
      }))
    }
  }
  const handleIncrement = (mode) => {
    if (!state.timerRunning) {
      const newSessionLength = mode === CONSTANTS.SESSION ? state.sessionLength < CONSTANTS.SESSION_LENGTH ? state.sessionLength + 1 : CONSTANTS.SESSION_LENGTH : state.sessionLength;
      const newBreakLength = mode === CONSTANTS.BREAK ? state.breakLength < CONSTANTS.BREAK_LENGTH ? state.breakLength + 1 : CONSTANTS.BREAK_LENGTH : state.breakLength;
      const newTimeLimit = state.timerType === CONSTANTS.SESSION ? newSessionLength * 60 : newBreakLength * 60;
      setState(prev => ({
        ...prev, sessionLength: newSessionLength, breakLength: newBreakLength, timeLimit: newTimeLimit
      }))
    }
  }
  const handleReset = () => {
    setState(initialState);
    const beep = document.getElementById("beep");
    beep.pause();
    beep.currentTime = 0;
  }

  //let timeout = null;
  const handleStopStart = () => {
    setState(prev => ({
      ...prev, timerRunning: !prev.timerRunning
    }))
  }

  const getClock = () => {
    let minutes = Math.floor(state.timeLimit / 60);
    let seconds = state.timeLimit - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  return (
    <div id="container">
      <div className="main-title">25 + 5 Clock</div>
      <div>
        <TimerLengthControl
          length={state.breakLength}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          title="Break Length"
          mode={CONSTANTS.BREAK}
        />
        <TimerLengthControl
          length={state.sessionLength}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          title="Session Length"
          mode={CONSTANTS.SESSION}
        />
      </div>
      <div className="timer">
        <div className="timer-wrapper">
          <div id="timer-label" className={state.timeLimit < 60 ? "warning" : ""}>{state.timerType}</div>
          <div id="time-left" className={state.timeLimit < 60 ? "warning" : ""}>{getClock()}</div>
        </div>
      </div>
      <div className="timer-control">
        <button id="start_stop" onClick={handleStopStart}>
          <i className="fa fa-play fa-2x" />
          <i className="fa fa-pause fa-2x" />
        </button>
        <button id="reset" onClick={handleReset}>
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
