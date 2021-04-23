import React from "react";
import './App.css';
import { FaMinus, FaPlus, FaPlay, FaPause, FaSync } from 'react-icons/fa';

const audio = document.getElementById("beep");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.interval = undefined;

    this.state = {
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25 * 60,
      isCounting: false,
      currentTimer: "Session",
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  handlePlayPause = () => {
    const {  isCounting } = this.state;
    if (isCounting) {
      clearInterval(this.interval);
      this.setState({
        isCounting: false
      });
    } else {
      this.setState({
        isCounting: true
      });
      this.interval = setInterval(() => {
        const { clockCount, currentTimer, breakCount, sessionCount } = this.state;

        if (clockCount === 0) {
          this.setState({
            currentTimer: (currentTimer === "Session") ? "Break" : "Session",
            clockCount: (currentTimer === "Session") ? (breakCount * 60) : (sessionCount * 60)
          });
          audio.play();
        } else {
          this.setState({
            clockCount: clockCount - 1
          }); 
        }
      }, 1000);
    }
  }

  handleReset = () => {
    this.setState({
        breakCount: 5,
        sessionCount: 25,
        clockCount: 25 * 60,
        isCounting: false,
        currentTimer: "Session",
    });
    clearInterval(this.interval);

    audio.pause();
    audio.currentTime = 0;
  }

  convertToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    minutes = minutes < 10 ? ("0"+minutes) : minutes;
    seconds = seconds < 10 ? ("0"+seconds) : seconds;

    return `${minutes}:${seconds}`;
  }

  handleBreakDecrease = () => {
    const {  breakCount, isCounting, currentTimer } = this.state;

    if (breakCount > 1) {
       if (!isCounting && currentTimer === "Break") {
        this.setState({
          breakCount: breakCount - 1,
          clockCount: (breakCount - 1) * 60
        });
      } else {
        this.setState({
          breakCount: breakCount - 1
        });
      }
    }
  }
  handleBreakIncrease = () => {
    const {  breakCount, isCounting, currentTimer } = this.state;

    if (breakCount < 60) {
      if (!isCounting && currentTimer === "Break") {
        this.setState({
          breakCount: breakCount + 1,
          clockCount: (breakCount + 1) * 60
        });
      } else {
        this.setState({
          breakCount: breakCount + 1
        });
      }
    }
  }
  handleSessionDecrease = () => {
    const {  sessionCount, isCounting, currentTimer } = this.state;

    if (sessionCount > 1) {
      if (!isCounting && currentTimer === "Session") {
        this.setState({
          sessionCount: sessionCount - 1,
          clockCount: (sessionCount - 1) * 60
        });
      } else {
        this.setState({
          sessionCount: sessionCount - 1
        });
      }
    }
  }
  handleSessionIncrease = () => {
    const {  sessionCount, isCounting, currentTimer } = this.state;

    if (sessionCount < 60) {
      if (!isCounting && currentTimer === "Session") {
        this.setState({
          sessionCount: sessionCount + 1,
          clockCount: (sessionCount + 1) * 60
        });
      } else {
        this.setState({
          sessionCount: sessionCount + 1
        });
      }
    }
  }

  render() {
    const { breakCount, sessionCount, clockCount, currentTimer, isCounting } = this.state;

    const breakProps = {
      title: "Break",
      count: breakCount,
      handleDecrease: this.handleBreakDecrease,
      handleIncrease: this.handleBreakIncrease 
    };

    const sessionProps = {
      title: "Session",
      count: sessionCount,
      handleDecrease: this.handleSessionDecrease,
      handleIncrease: this.handleSessionIncrease 
    };

    return (
      <div>
        <div className="length-container">
          <SetTimer {...breakProps} />
          <SetTimer {...sessionProps} />
        </div>
        <div className="clock-container">
          <h2 id="timer-label">{currentTimer}</h2>
          <span id="time-left">{this.convertToTime(clockCount)}</span>
          <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
          <div>
            <button id="start_stop" onClick={this.handlePlayPause}>{isCounting ? <FaPause /> : <FaPlay />}</button>
            <button id="reset" onClick={this.handleReset}><FaSync /></button>
          </div>
        </div>
      </div>
    )
  }
}

class SetTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const elementId = this.props.title.toLowerCase();

    return (
      <div className="timer-container">
        <h5 id={`${elementId}-label`}>{this.props.title} Length</h5>
        <div className="button-actions">
          <button id={`${elementId}-decrement`} onClick={this.props.handleDecrease}><FaMinus /></button>
          <span id={`${elementId}-length`}>{this.props.count}</span>
          <button id={`${elementId}-increment`} onClick={this.props.handleIncrease}><FaPlus /></button>
        </div>
      </div>
    )
  }
}


export default App;
