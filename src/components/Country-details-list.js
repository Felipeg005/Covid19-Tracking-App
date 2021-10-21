import { React, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { GetCovidData } from '../redux/Covid-Data-Reducer/covidDataReducer';
import CountryDetails from './Country-details';

const CountryDetailsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCovidData());
  }, []);

  const covidDataStorage = useSelector((state) => state);

  const countrySelected = () => {
    const history = useHistory();
    const countrySelectedArray = [];
    covidDataStorage.covidDataReducer.forEach((country) => {
      if (history.location.pathname.includes(country.id)) {
        countrySelectedArray.push(country);
      }
    });
    return countrySelectedArray;
  };

  return (
    <>
    <main>
    <h3>Stats by Country</h3>
      <ul className="country-lists-container">
        {
          countrySelected().map((country) => (
            <CountryDetails
            key={country.key}
              todayConfirmed={country.today_confirmed}
              todayDeaths={country.today_deaths}
              todayNewConfirmed={country.today_new_confirmed}
              todayNewDeaths={country.today_new_deaths}
              todayNewOpenCases={country.today_new_open_cases}
              todayNewRecovered={country.today_new_recovered}
              todayOpenCases={country.today_open_cases}
              todayRecovered={country.today_recovered}
              yesterdayConfirmed={country.yesterday_confirmed}
              yesterdayDeaths={country.yesterday_deaths}
              yesterdayOpenCases={country.yesterday_open_cases}
              yesterdayRecovered={country.yesterday_recovered}
            />
          ))
        }
      </ul>
    </main>
    </>
  );
};

export default CountryDetailsList;