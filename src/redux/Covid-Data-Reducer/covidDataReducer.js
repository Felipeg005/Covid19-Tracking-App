import { v4 as uuidv4 } from 'uuid';
// Actions
const GET_COVID_DATA = 'CovidDataStore/CovidData/GET_COVID_DATA';

const initialState = [];
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DATA: {
      if (state.length > 1) {
        return state;
      }
      return action.state;
    }
    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const GetCovidData = () => async (dispatch) => {
  const response = await fetch('https://api.covid19tracking.narrativa.com/api/2021-10-18',
    {
      method: 'GET',
    });
  const data = await response.json();
  const keys = Object.keys(data.dates['2021-10-18'].countries);
  const state = [];
  let counter = -1;
  keys.forEach((key) => {
    state.push({ ...data.dates['2021-10-18'].countries[key], key: uuidv4(), color: counter += 1 });
  });
  // state.sort(() => 0.5 - Math.random());
  dispatch({
    type: GET_COVID_DATA,
    state,
  });
};