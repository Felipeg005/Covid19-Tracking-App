import React from 'react';

const CountryDetails = (props) => {
  const {
    countryId, countryTitle, totalCases,
  } = props;

  return (
    <>
      <li id={countryId} className="country-details-container">
        <div className='country-details'>
        <h2>{countryTitle}</h2>
        <h3>Total cases</h3>
        <h3>{totalCases}</h3>
        <button id={countryId} className="go-button" type="button">Go</button>
        </div>
      </li>
    </>
  );
};

export default CountryDetails;