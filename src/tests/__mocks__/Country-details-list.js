import CountryDetails from './Country-details';

const CountryDetailsList = () => {
  const mockAPI = [
    {
      name: 'Afghanistan',
      id: 'afghanistan',
      key: 1,
      today_confirmed: 155776,
      today_deaths: 7246,
      today_new_confirmed: 12,
      today_new_deaths: 3,
      today_new_open_cases: 9,
      today_new_recovered: 0,
      today_open_cases: 65944,
      today_recovered: 82586,
      yesterday_confirmed: 155764,
      yesterday_deaths: 7243,
      yesterday_open_cases: 65935,
      yesterday_recovered: 8258,
    },
    {
      name: 'Albania', id: 'albania', today_confirmed: 178188, key: 2,
    },
  ];

  const covidDataStorage = mockAPI;

  const countrySelected = () => {
    const history = '/Covid19-Tracking-App-React-Redux-Capstone/details/afghanistan';
    const countrySelectedArray = [];
    covidDataStorage.forEach((country) => {
      if (history.includes(country.id)) {
        countrySelectedArray.push(country);
      }
    });
    return countrySelectedArray;
  };

  return (
    <>
    <main>
    <h3>Details by Country</h3>
      <ul data-testid="country-lists-container" className="country-lists-container">
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