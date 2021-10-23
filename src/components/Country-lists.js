import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCovidData } from '../redux/Covid-Data-Reducer/covidDataReducer';
import world from '../img/simbolo-del-globo-terraqueo.png';
import CountryCard from './Country-card';

const CountryLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCovidData());
  }, []);

  const covidDataStorage = useSelector((state) => state);

  const sumWorldCases = () => {
    let result = 0;
    covidDataStorage.covidDataReducer.forEach((country) => {
      result += country.today_confirmed;
    });
    return result;
  };

  const [filteredCountry, setCountry] = useState('');
  const updateCountry = (e) => {
    setCountry(e);
  };

  return (
    <>
      <header>
        <ul className="total-world-container">
        <li><img className="home-total-img" src={world} alt="World-Image"/></li>
        <div>
        <li><h2 className="world-title">Covid-19<br/>Total World Cases</h2></li>
        <li><h3 className="world-cases">{sumWorldCases()}</h3></li>
        </div>
      </ul>
    </header>
    <main>
    <div className="filter-container">
    <h3 className='stats-title'>Stats by Country</h3>
    <input className="input-filter" placeholder="Search Your Country" onChange={(e) => updateCountry(e.target.value)}></input>
    </div>
      <ul className="country-lists-container">
        {
          covidDataStorage.covidDataReducer.filter(
            (country) => country.name.toLowerCase().includes(filteredCountry.toLowerCase()),
          ).map((country) => (
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