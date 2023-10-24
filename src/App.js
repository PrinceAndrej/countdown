import React, { Component } from "react";
import "./App.css";

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.calculateCountdown();
    this.countdownInterval = setInterval(this.calculateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  calculateCountdown = () => {
    const launchDate = new Date("2023-11-06T21:00:00Z");
    const now = new Date();
    const distance = launchDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    } else {
      clearInterval(this.countdownInterval);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <section className="main">
        <h1>WE`RE LAUNCHING SOON</h1>
        <div className="container">
          <div className="countdown-item">
            <div className="flipdown" id="flipdown-days">
              {`${days}`}
            </div>
            <p>DAYS</p>
          </div>
          <div className="countdown-item">
            <div className="flipdown" id="flipdown-hours">
              {`${hours}`}
            </div>
            <p>HOURS</p>
          </div>
          <div className="countdown-item">
            <div className="flipdown" id="flipdown-minutes">
              {`${minutes}`}
            </div>
            <p>MINUTES</p>
          </div>
          <div className="countdown-item">
            <div className="flipdown" id="flipdown-seconds">
              {`${seconds}`}
            </div>
            <p>SECONDS</p>
          </div>
        </div>
        <div className="svgContainer"></div>
      </section>
    );
  }
}

export default CountdownTimer;
