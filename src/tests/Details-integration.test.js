import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryDetailsList from './__mocks__/Country-details-list';

describe('Integration test for Details components', () => {
  beforeEach(() => {
    render(<CountryDetailsList />);
  });

  test('Displays a main section called Details by country', () => {
    expect(screen.getByText('Details by Country')).toBeInTheDocument();
  });

  test('Renders a list ready for details', () => {
    expect(screen.getByTestId('country-lists-container')).toBeInTheDocument();
  });

  test('Displays the total country details elements', () => {
    expect(screen.getAllByTestId('detail-card')).toHaveLength(12);
  });

  test('Detail of today Confirmed displays properly', () => {
    expect(screen.getByText('today Confirmed: 155776')).toBeInTheDocument();
  });

  test('Detail of today today Deaths properly', () => {
    expect(screen.getByText('today Deaths: 7246')).toBeInTheDocument();
  });

  test('Detail of today New Confirmed displays properly', () => {
    expect(screen.getByText('today New Confirmed: 12')).toBeInTheDocument();
  });

  test('Detail of today New Deaths displays properly', () => {
    expect(screen.getByText('today New Deaths: 3')).toBeInTheDocument();
  });

  test('Detail of New Open Cases displays properly', () => {
    expect(screen.getByText('today New Open Cases: 9')).toBeInTheDocument();
  });

  test('Detail of today Confirmed displays properly', () => {
    expect(screen.getByText('today New Recovered: 0')).toBeInTheDocument();
  });

  test('Detail of today Open Cases displays properly', () => {
    expect(screen.getByText('today Open Cases: 65944')).toBeInTheDocument();
  });

  test('Detail of today Recovered displays properly', () => {
    expect(screen.getByText('today Recovered: 82586')).toBeInTheDocument();
  });

  test('Detail of yesterday Confirmed displays properly', () => {
    expect(screen.getByText('yesterday Confirmed: 155764')).toBeInTheDocument();
  });

  test('Detail of yesterday Deaths displays properly', () => {
    expect(screen.getByText('yesterday Deaths: 7243')).toBeInTheDocument();
  });

  test('Detail of yesterday Open Cases displays properly', () => {
    expect(screen.getByText('yesterday Open Cases: 65935')).toBeInTheDocument();
  });

  test('Detail of yesterday Recovered displays properly', () => {
    expect(screen.getByText('yesterday Recovered: 8258')).toBeInTheDocument();
  });

  test('Each Detail card contains a details button', () => {
    expect(screen.getAllByTestId('detail-btn')).toHaveLength(12);
  });
});
