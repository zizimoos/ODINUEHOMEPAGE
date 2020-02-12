import React from "react";
import HomePresenter from "./HomePresenter";
import bgImage from "../../assets/backImage/cigarapWebBack_02.jpg";

export default class extends React.Component {
  state = {
    backImage: null,
    months: null,
    days: null,
    minutes: null,
    hours: null,
    seconds: null,
    ButtsNumber: null,
    error: null,
    bgImage: bgImage
  };
  getTime = () => {
    const NINE_HOURS_MILLISECONDS = 32400000;
    const xDay = new Date("2020-12-31:00:00:00+0900");
    const now = new Date();
    const difference = new Date(xDay - now - NINE_HOURS_MILLISECONDS);
    const months = difference.getMonth();
    const days = difference.getDate();
    const minutes = difference.getMinutes();
    const hours = difference.getHours();
    const seconds = difference.getSeconds();
    //const elapsedTime = difference.getTime();
    //console.log("elapsed time =", Math.floor(elapsedTime / 1000));
    this.setState({ months, days, minutes, hours, seconds });
  };

  thrownNumber = () => {
    const TOTAL_NUMBER_OF_BUTTS = "4000000000000"; // 연간 4조개
    const thrownButtsNumber = parseInt(TOTAL_NUMBER_OF_BUTTS / 31556926000); //밀리초당 버려지는 갯수
    const NINE_HOURS_MILLISECONDS = 32400000;
    const now = new Date();
    const initDay = new Date("2020-01-01:00:00:00+0900");
    const initElapsedTime = new Date(now - initDay + NINE_HOURS_MILLISECONDS); // 1월 1일 부터 현재 시간 까지
    let initButtsNumber = Math.floor(
      initElapsedTime.getTime() * thrownButtsNumber //1월 1일부터 현재까지 지난 초단위 곱하기 초당 버려지는 갯수
    );
    initButtsNumber = parseInt(initButtsNumber);
    this.setState({
      ButtsNumber: initButtsNumber
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
      bgImage,
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
        bgImage={bgImage}
      ></HomePresenter>
    );
  }
}
