import React from 'react';
import { useHistory } from 'react-router-dom';

const CountryCard = (props) => {
  const {
    countryId, countryTitle, totalCases,
  } = props;

  const history = useHistory();

  const goToDetails = () => {
    history.push(`/Covid19-Tracking-App-React-Redux-Capstone/details/${countryId}`);
    console.log(history);
  };

  return (
    <>
      <li id={countryId} className="country-card">
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