import React from 'react';

const CountryLists = () => {
  let result = 0;
  result += 1;
  return (
    <>
    <main>
    <h3>Stats by Country</h3>
      <ul className="country-lists-container">
        <li className="country-card">
          <div className="card-img-container">
          <img src="" alt="Country-Image"/>
          <button className="go-button" type="button">Go</button>
          </div>
          <div>
          <h2>Total Country Cases</h2>
          <h3>4333434</h3>
          </div>
        </li>
      </ul>
    </main>
    </>
  );
};

export default CountryLists;