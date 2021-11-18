import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [pause, setPause] = useState(false)
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (sec !== 0) {
      setSec(0)
      setMin(prev => prev + 1)
    }
  }, [sec === 60])

  useEffect(() => {
    if (min !== 0) {
      setHour(prev => prev + 1)
    }
  }, [min === 60])

  const handleStart = () => {
    setTimer(setInterval(() => {
      setSec(prev => prev + 1)
    }, 1000))
  }

  const handlePause = () => {
    if (pause) {
      setPause(!pause)
      handleStart()
    } else {
      setPause(!pause)
      clearInterval(timer)
    }
  }

  const handleReset = () => {
    setSec(0)
    setMin(0)
    setHour(0)
    clearInterval(timer)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="timer">
          <h1>{
            hour.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            })}
            :
          </h1>
          <h1>{
            min.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            })}
            :
          </h1>
          <h1>{
            sec.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            })}
          </h1>
        </div>
        <div className="buttons">
          <button className="start" onClick={handleStart}>Start</button>
          <button className="pause" onClick={handlePause}>{pause ? `Resume` : `Pause`}</button>
          <button className="stop" onClick={handleReset}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
