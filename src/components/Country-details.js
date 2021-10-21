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
      <li className='country-details'>today Confirmed: {todayConfirmed}<button>Go</button></li>
      <li className='country-details'>today Deaths: {todayDeaths}<button>Go</button></li>
      <li className='country-details'>today New Confirmed: {todayNewConfirmed}<button>Go</button></li>
      <li className='country-details'>today New Deaths: {todayNewDeaths}<button>Go</button></li>
      <li className='country-details'>today New Open Cases: {todayNewOpenCases}<button>Go</button></li>
      <li className='country-details'>today New Recovered: {todayNewRecovered}<button>Go</button></li>
      <li className='country-details'>today Open Cases: {todayOpenCases}<button>Go</button></li>
      <li className='country-details'>today Recovered: {todayRecovered}<button>Go</button></li>
      <li className='country-details'>yesterday Confirmed: {yesterdayConfirmed}<button>Go</button></li>
      <li className='country-details'>yesterday Deaths: {yesterdayDeaths}<button>Go</button></li>
      <li className='country-details'>yesterday Open Cases: {yesterdayOpenCases}<button>Go</button></li>
      <li className='country-details'>yesterday Recovered: {yesterdayRecovered}<button>Go</button></li>
    </>
  );
};

export default CountryDetails;