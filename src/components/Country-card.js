/* eslint-disable */
import React from 'react';
import { useHistory } from 'react-router-dom';

const CountryCard = (props) => {
  const {
    countryId, countryTitle, totalCases, color
  } = props;

  const history = useHistory();

  const goToDetails = () => {
    history.push(`/Covid19-Tracking-App-React-Redux-Capstone/details/${countryId}`);
  };

  const result = () => {
    if (([1, 0, 0, 1][color % 4]) === 0) {
      return '#4369b0'
    }
    return '#3c5e9c'
  }

  const backgroundStyle = {
    backgroundColor: result(),
  }
    
  const imgSocurce = () => {
    if (([1, 0, 0, 1][color % 4]) === 0) {
      return '../img/world.png'
    }
    return '../img/world(1).png'
  }

  return (
    <>
      <li id={countryId} onClick={goToDetails} className="country-card" style={backgroundStyle}>
        <div className="card-img-container">
        <img className="card-img" src="" alt="Country-Image"/>
        <button id={countryId} className="go-button" type="button" onClick={goToDetails}>Go</button>
        </div>
        <div>
        <h2 className="card-title">{countryTitle}</h2>
        <h3 className="card-cases">{totalCases}</h3>
        </div>
      </li>
    </>
  );
};

export default CountryCard;