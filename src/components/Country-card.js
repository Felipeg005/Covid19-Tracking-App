import React from 'react';

const CountryCard = (props) => {
  const {
    countryId, countryTitle,
  } = props;

  return (
    <>
      <li id={countryId} className="country-card">
        <div className="card-img-container">
        <img src="" alt="Country-Image"/>
        <button className="go-button" type="button">Go</button>
        </div>
        <div>
        <h2>{countryTitle}</h2>
        <h3>4333434</h3>
        </div>
      </li>
    </>
  );
};

export default CountryCard;