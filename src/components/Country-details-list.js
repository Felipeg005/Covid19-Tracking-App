import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCovidData } from '../redux/Covid-Data-Reducer/covidDataReducer';
import CountryDetails from './Country-details';

const CountryDetailsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCovidData());
  }, []);

  const covidDataStorage = useSelector((state) => state);

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
        {
          covidDataStorage.covidDataReducer.map((country) => (
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