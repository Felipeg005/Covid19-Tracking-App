import covidDataReducer from '../redux/Covid-Data-Reducer/covidDataReducer'

describe('Unit tests for reducer', () => {

  describe('Reducer display correct Action', () => {
    it('returns the correct state for GET_COVID_DATA action', () => {
      expect(covidDataReducer(state, {
        type: GET_ROCKETS,
        state: {
          id: 3,
          rocket1: '3',
          rocket_name: '3',
        },
      })).toEqual([{ id: 1, rocket_name: '1' }, { id: 2, rocket_name: '2' }]);
    });
  });
});
