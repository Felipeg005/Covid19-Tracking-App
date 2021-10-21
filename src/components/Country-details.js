import React from 'react';

const CountryDetails = (props) => {
  const {
    todayConfirmed,
    todayDeaths,
    todayNewConfirmed,
    todayNewDeaths,
    todayNewOpenCases,
    todayNewRecovered,
    todayOpenCases,
    todayRecovered,
    yesterdayConfirmed,
    yesterdayDeaths,
    yesterdayOpenCases,
    yesterdayRecovered,
  } = props;

  console.log(props);
  return (
    <>
      <li className='detail-card'>today Confirmed: {todayConfirmed}<button className="det-btn">Go</button></li>
      <li className='detail-card'>today Deaths: {todayDeaths}<button className="det-btn">Go</button></li>
      <li className='detail-card'>today New Confirmed: {todayNewConfirmed}<button className="det-btn">Go</button></li>
      <li className='detail-card'>today New Deaths: {todayNewDeaths}<button className="det-btn">Go</button></li>
      <li className='detail-card'>today New Open Cases: {todayNewOpenCases}<button className="det-btn">Go</button></li>
      <li className='detail-card'>today New Recovered: {todayNewRecovered}<button className="det-btn">Go</button></li>
      <li className='detail-card'>today Open Cases: {todayOpenCases}<button className="det-btn">Go</button></li>
      <li className='detail-card'>today Recovered: {todayRecovered}<button className="det-btn">Go</button></li>
      <li className='detail-card'>yesterday Confirmed: {yesterdayConfirmed}<button className="det-btn">Go</button></li>
      <li className='detail-card'>yesterday Deaths: {yesterdayDeaths}<button className="det-btn">Go</button></li>
      <li className='detail-card'>yesterday Open Cases: {yesterdayOpenCases}<button className="det-btn">Go</button></li>
      <li className='detail-card'>yesterday Recovered: {yesterdayRecovered}<button className="det-btn">Go</button></li>
    </>
  );
};

export default CountryDetails;