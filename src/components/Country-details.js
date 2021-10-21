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

  return (
    <>
      <li className='detail-card'>today Confirmed: {todayConfirmed}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>today Deaths: {todayDeaths}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>today New Confirmed: {todayNewConfirmed}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>today New Deaths: {todayNewDeaths}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>today New Open Cases: {todayNewOpenCases}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>today New Recovered: {todayNewRecovered}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>today Open Cases: {todayOpenCases}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>today Recovered: {todayRecovered}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>yesterday Confirmed: {yesterdayConfirmed}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>yesterday Deaths: {yesterdayDeaths}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>yesterday Open Cases: {yesterdayOpenCases}<button className="detail-btn">Go</button></li>
      <li className='detail-card'>yesterday Recovered: {yesterdayRecovered}<button className="detail-btn">Go</button></li>
    </>
  );
};

export default CountryDetails;