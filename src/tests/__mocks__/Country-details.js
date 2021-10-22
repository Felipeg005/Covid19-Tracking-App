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
      <li data-testid="detail-card" className='detail-card'>today Confirmed: {todayConfirmed}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>today Deaths: {todayDeaths}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>today New Confirmed: {todayNewConfirmed}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>today New Deaths: {todayNewDeaths}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>today New Open Cases: {todayNewOpenCases}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>today New Recovered: {todayNewRecovered}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>today Open Cases: {todayOpenCases}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>today Recovered: {todayRecovered}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>yesterday Confirmed: {yesterdayConfirmed}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>yesterday Deaths: {yesterdayDeaths}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>yesterday Open Cases: {yesterdayOpenCases}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
      <li data-testid="detail-card" className='detail-card'>yesterday Recovered: {yesterdayRecovered}<button data-testid="detail-btn" className="detail-btn">Go</button></li>
    </>
  );
};

export default CountryDetails;