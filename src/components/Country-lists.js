import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCovidData } from '../redux/Covid-Data-Reducer/covidDataReducer';
import CountryCard from './Country-card';

const CountryLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCovidData());
  }, []);

  const covidDataStorage = useSelector((state) => state);

  return (
    <>
    <main>
    <h3 className='stats-title'>Stats by Country</h3>
      <ul className="country-lists-container">
        {
          covidDataStorage.covidDataReducer.map((country) => (
            <CountryCard
              key={country.key}
              countryId={country.id}
              countryTitle={country.name}
              totalCases={country.today_confirmed}
              color={country.color}
            />
          ))
        }
      </ul>
    </main>
    </>
  );
};

export default CountryLists;