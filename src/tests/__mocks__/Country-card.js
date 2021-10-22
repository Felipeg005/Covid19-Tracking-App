import React from 'react';

const CountryCard = (props) => {
  const {
    countryId, countryTitle, totalCases,
  } = props;

  return (
    <>
      <li id={countryId} className="country-card">
        <div className="card-img-container">
        <img src="" alt="Country-Image"/>
        <button id={countryId} className="go-button" type="button">Go</button>
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