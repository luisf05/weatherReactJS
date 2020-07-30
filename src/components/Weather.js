import React from "react";
import PropTypes from 'prop-types';

const Weather = ({ result }) => {
  const { name, main, weather, sys } = result;
  if (!name) return null;

  //Kelvin degrees to celsius
  const Kelvin = 273.15;

  const iconImg = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const today = new Date();

  return (
    <div className="card-panel blue col s12">
      <div className="white-text">
        <h2>
          {name}, {sys.country}{" "}
        </h2>
        <p>
          {today.getDate()}-{today.getMonth()}-{today.getFullYear()}
        </p>
        <p className="temperatura">
          <img src={iconImg} alt="weather img" />
          {parseFloat(main.temp - Kelvin, 10).toFixed(2)} <span>&#x2103;</span>
          <img src={iconImg} alt="weather img" />
        </p>
        <p>
          Max temp:
          {parseFloat(main.temp_max - Kelvin, 10).toFixed(2)}{" "}
          <span>&#x2103;</span>
        </p>
        <p>
          Min temp:
          {parseFloat(main.temp_min - Kelvin, 10).toFixed(2)}{" "}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes={
  result: PropTypes.object.isRequired,
}
export default Weather;
