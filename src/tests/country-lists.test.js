import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryLists from '../tests/__mocks__/Country-lists';

describe('Unit test for home components', () => {

  test('Displays a main section called Stats by country', () => {
    const div = document.createElement('div');
    render (<CountryLists />, div )
    expect(screen.getByText('Stats by Country')).toBeInTheDocument()
  });

  test('Renders a list ready for countries', () => {
    const div = document.createElement('div');
    const component = render (<CountryLists />, div )
    expect(screen.getByTestId('country-lists-container'))
  });

  test('Displays the total country objects of the state', () => {
    const div = document.createElement('div');
    const component = render (<CountryLists />, div )
    expect(component.container).toBe(1)
  });

  test('Country name displays correctly', () => {
    const div = document.createElement('div');
    const component = render (<CountryLists />, div )
    expect(component.container).toBe(1)
  });

  test('Each country card has the number of cases', () => {
    const div = document.createElement('div');
    const component = render (<CountryLists />, div )
    expect(component.container).toBe(1)
  });

  test('Each country card contains a go details button', () => {
    const div = document.createElement('div');
    const component = render (<CountryLists />, div )
    expect(component.container).toBe(1)
  });

});

