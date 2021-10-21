import React from 'react';
import { render, cleanup, screen } from '../tests/test-utils';
import Home from '../pages/Home';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

describe('Unit test for home components', () => {

  beforeEach(() => {
    const history = jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        Push: jest.fn()
      })
    }));

    render(
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>
    )
  });

  afterEach(() => {
    cleanup()
  });


  test('renders a list ready for countries', () => {
    const div = document.createElement('div')
    const component = render (<Home />, div)
    expect(component.container).toMatchSnapshot()
  });
});

