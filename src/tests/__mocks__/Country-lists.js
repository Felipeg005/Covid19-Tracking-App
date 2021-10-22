import CountryCard from "../__mocks__/Country-card";

const CountryLists = () => { 
  const mockAPI =
    [
      {name: "Afghanistan", today_confirmed: 155776, id: "afghanistan", key: 1},
      {name: "Albania", id: "albania", today_confirmed: 178188, key: 2},
    ]

const covidDataStorage = mockAPI;

return (
  <>
  <main>
  <h3>Stats by Country</h3>
    <ul data-testid="country-lists-container" className="country-lists-container">
      {
        covidDataStorage.map((country) => (
          <CountryCard
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
)};

export default CountryLists;