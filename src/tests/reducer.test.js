import covidDataReducer from '../redux/Covid-Data-Reducer/covidDataReducer'

describe('Unit tests for reducer', () => {

  describe('Reducer display correct Action', () => {
    it('returns the correct state for GET_COVID_DATA action', () => {
      expect(covidDataReducer(state, {
        type: GET_COVID_DATA,
        state: {
          id: 3,
          Country1: '3',
          Country_name: '3',
        },
      })).toEqual([{ id: 1, Country_name: '1' }, { id: 2, Country_name: '2' }]);
    });
  });
});
