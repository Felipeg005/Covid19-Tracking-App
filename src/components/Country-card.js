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

  return (
    <>
      <li id={countryId} onClick={goToDetails} className="country-card">
        <div className="card-img-container">
        <img src="" alt="Country-Image"/>
        <button id={countryId} className="go-button" type="button" onClick={goToDetails}>Go</button>
        </div>
        <div>
        <h2>{countryTitle}</h2>
        <h3>Total cases</h3>
        <h3>{totalCases}</h3>
        </div>
      </li>
    </>
  );
};

export default CountryCard;