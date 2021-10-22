import { React, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { GetCovidData } from '../redux/Covid-Data-Reducer/covidDataReducer';
import CountryDetails from './Country-details';
import world from '../img/simbolo-del-globo-terraqueo.png';

const CountryDetailsList = () => {
  const covidDataStorage = useSelector((state) => state);

  if (!covidDataStorage) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(GetCovidData());
    }, []);
  }

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
    <header>
      <ul className="total-world-container">
        <li><img className="home-total-img" src={world} alt="World-Image"/></li>
        <div>
        <li><h2 className="world-title">{countrySelected()[0].name}<br/></h2></li>
        <li><h3 className="world-cases">Cases {countrySelected()[0].today_confirmed}</h3></li>
        </div>
      </ul>
    </header>
    <main>
    <h3 className='stats-title'>{countrySelected()[0].name} Details</h3>
      <ul className="details-lists-container">
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