import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import { render } from '@testing-library/react';
import covidDataReducer from '../redux/Covid-Data-Reducer/covidDataReducer';
import configureStore from 'redux-mock-store';

describe('Unit tests for reducer', () => {
  const GET_COVID_DATA = 'CovidDataStore/CovidData/GET_COVID_DATA';
  const middlewares = []
  const mockStore = configureStore(middlewares)
  const initialState = {}
  const store = mockStore(initialState);

  render (
    <Provider store={mockStore(initialState)}>
      <App />
    </Provider>
  );

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
      store.dispatch({
        type: GET_COVID_DATA,
        state: {
          id: 3,
          Country1: '3',
          Country_name: '3',
        },
      })
        const actions = store.getActions()
        expect(actions[0].type).toEqual('CovidDataStore/CovidData/GET_COVID_DATA')
    });
  });
});
