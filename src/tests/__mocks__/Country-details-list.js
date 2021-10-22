import CountryDetails from './Country-details';

const CountryDetailsList = () => {
    const mockAPI =
      [
        {name: "Afghanistan", today_confirmed: 155776, id: "afghanistan", key: 1},
        {name: "Albania", id: "albania", today_confirmed: 178188, key: 2},
      ]
  
  const covidDataStorage = mockAPI;

  const countrySelected = () => {
    const history = '/Covid19-Tracking-App-React-Redux-Capstone/details/afghanistan'
    const countrySelectedArray = [];
    covidDataStorage.covidDataReducer.forEach((country) => {
      if (history.includes(country.id)) {
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