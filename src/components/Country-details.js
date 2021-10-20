import React from 'react';
import { useHistory } from 'react-router-dom';

const CountryDetails = (props) => {
  const {
    countryId, countryTitle, totalCases,
  } = props;

  const history = useHistory();

  return (
    <>
      <li id={countryId} className="country-details">
        <div>
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