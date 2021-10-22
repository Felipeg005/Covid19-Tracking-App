import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryDetailsList from '../tests/__mocks__/Country-lists';

describe('Integration test for Details components', () => {

  beforeEach(() => {
    render (<CountryDetailsList />)
  })

  test('Displays a main section called Stats by country', () => {
    expect(screen.getByText('Stats by Country')).toBeInTheDocument()
  });

  test('Renders a list ready for countries', () => {
    expect(screen.getByTestId('country-lists-container')).toBeInTheDocument()
  });

  test('Displays the total country objects of the state', () => {
    expect(screen.getAllByTestId('country-card')).toHaveLength(2)
  });

  test('Country name displays correctly', () => {
    expect(screen.getByText('Afghanistan')).toBeInTheDocument()
    expect(screen.getByText('Albania')).toBeInTheDocument()
  });

  test('Each country card has the number of cases', () => {
    expect(screen.getByText('155776')).toBeInTheDocument()
    expect(screen.getByText('178188')).toBeInTheDocument()
  });

  test('Each country card contains a go details button', () => {
    expect(screen.getAllByTestId('go-button')).toHaveLength(2)
  });
});

