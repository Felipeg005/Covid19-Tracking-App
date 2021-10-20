import React from 'react';
import CountryDetailsList from '../components/Country-details-list';
import TotalDetails from '../components/Details-Total';

class DetailsPage extends React.Component {
  render() {
    return (
      <>
      <TotalDetails />
      <CountryDetailsList />
      </>
    );
  }
}

export default DetailsPage;