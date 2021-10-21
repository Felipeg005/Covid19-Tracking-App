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
              countryId={country.id}
              countryTitle={country.name}
              totalCases={country.today_confirmed}
            />
          ))
        }
      </ul>
    </main>
    </>
  );
};

export default CountryDetailsList;