import { uuid } from 'uuidv4';

// Actions
const GET_COVID_DATA = 'CovidDataStore/CovidData/GET_COVID_DATA';

const URL = 'https://us-central1-CovidDatatore-api-e63c8.cloudfunctions.net/CovidDatatoreApi/apps/4dkScpJEBinEhk7DfZib/CovidData';
const initialState = [];
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DATA: {
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
  const state = [];
  state.push(data.dates['2021-10-18'].countries);
  state.forEach((country) => {
    country.key = uuid();
  });
  dispatch({
    type: GET_COVID_DATA,
    state,
  });
};