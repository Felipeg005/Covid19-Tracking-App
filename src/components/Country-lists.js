import React from 'react';

const CountryLists = () => {
  let result = 0;
  result += 1;
  return (
    <>
    <main>
      <ul className="country-lists-container">
        <li><img src="" alt="World-Image"/></li>
        <button className="go-button" type="button">Go</button>
        <div>
        <li><h2>Total Country Cases</h2></li>
        <li><h3>4333434</h3></li>
        </div>
      </ul>
    </main>
    </>
  );
};

export default CountryLists;