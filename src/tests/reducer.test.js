import covidDataReducer from '../redux/Covid-Data-Reducer/covidDataReducer';
import GetCovidData from '../redux/Covid-Data-Reducer/covidDataReducer';

render(
  <Provider store={store}>
    <ChooseIndex />
  </Provider>
)

describe('Unit tests for reducer', () => {
  const GET_COVID_DATA = 'CovidDataStore/CovidData/GET_COVID_DATA';

  describe('Covid data reducer function test', () => {
    it('returns the correct state for GET_COVID_DATA action', () => {
      expect(covidDataReducer([], {
        type: GET_COVID_DATA,
        state: {
          id: 3,
          Country1: '3',
          Country_name: '3',
        },
      })).toEqual({"Country1": "3", "Country_name": "3", "id": 3});
    });
  });

  describe('Reducer display correct Action', () => {
    it('returns GET_COVID_DATA action', () => {
      expect(GetCovidData().type).toEqual({"Country1": "3", "Country_name": "3", "id": 3});
    });
  });

});
