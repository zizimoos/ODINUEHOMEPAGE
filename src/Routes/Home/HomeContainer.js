import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    months: null,
    days: null,
    minutes: null,
    hours: null,
    seconds: null,
    ButtsNumber: null,
    error: null
  };
  getTime = () => {
    const NINE_HOURS_MILLISECONDS = 32400000;
    const xmasDay = new Date("2020-12-31:00:00:00+0900");
    const now = new Date();
    const difference = new Date(xmasDay - now - NINE_HOURS_MILLISECONDS);
    const months = difference.getMonth();
    const days = difference.getDate();
    const minutes = difference.getMinutes();
    const hours = difference.getHours();
    const seconds = difference.getSeconds();
    this.setState({ months, days, minutes, hours, seconds });
  };

  thrownNumber = () => {
    const TOTAL_NUMBER_OF_BUTTS = "4000000000000";
    const thrownButtsNumber = parseInt(TOTAL_NUMBER_OF_BUTTS / 31556926);
    this.setState({
      ButtsNumber: this.state.ButtsNumber + parseInt(thrownButtsNumber / 10)
    });
  };

  componentDidMount() {
    try {
      this.getTime();
      setInterval(this.getTime, 1000);
      this.thrownNumber();
      setInterval(this.thrownNumber, 100);
    } catch (error) {
      this.setState({ error: "Can't find the time" });
    }
  }
  render() {
    const {
      months,
      days,
      minutes,
      hours,
      seconds,
      ButtsNumber,
      error
    } = this.state;

    return (
      <HomePresenter
        months={months}
        days={days}
        minutes={minutes}
        hours={hours}
        seconds={seconds}
        ButtsNumber={ButtsNumber}
        error={error}
      ></HomePresenter>
    );
  }
}
