import React from 'react';
import CountryDetailsList from '../components/Country-details-list';
import Nav from '../components/Nav';

class DetailsPage extends React.Component {
  render() {
    return (
      <>
      < Nav />
      <CountryDetailsList />
      </>
    );
  }
}

export default DetailsPage;