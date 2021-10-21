import React from 'react';
import CountryDetailsList from '../components/Country-details-list';
import TotalDetails from '../components/Details-Total';
import Nav from '../components/Nav';

class DetailsPage extends React.Component {
  render() {
    return (
      <>
      < Nav />
      <TotalDetails />
      <CountryDetailsList />
      </>
    );
  }
}

export default DetailsPage;