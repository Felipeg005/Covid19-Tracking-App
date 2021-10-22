import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryLists from '../tests/__mocks__/Country-lists';

describe('Unit test for home components', () => {

  test('Displays a main section called Stats by country', () => {
    render (<CountryLists />)
    expect(screen.getByText('Stats by Country')).toBeInTheDocument()
  });

  test('Renders a list ready for countries', () => {
    render (<CountryLists />)
    expect(screen.getByTestId('country-lists-container')).toBeInTheDocument()
  });

  test('Displays the total country objects of the state', () => {
    render (<CountryLists />)
    expect(screen.getAllByTestId('country-card')).toHaveLength(2)
  });

  test('Country name displays correctly', () => {
    render (<CountryLists />)
    expect(screen.getByText('Afghanistan')).toBeInTheDocument()
    expect(screen.getByText('Albania')).toBeInTheDocument()
  });

  test('Each country card has the number of cases', () => {
    render (<CountryLists />)
    expect(screen.getByText('155776')).toBeInTheDocument()
    expect(screen.getByText('178188')).toBeInTheDocument()
  });

  test('Each country card contains a go details button', () => {
    render (<CountryLists />)
    expect(screen.getAllByTestId('go-button')).toHaveLength(2)
  });
});

