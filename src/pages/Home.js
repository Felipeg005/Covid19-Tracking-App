import React from 'react';
import CountryLists from '../components/Country-lists';
import TotalData from '../components/Home-Total';

class Home extends React.Component {
  render() {
    return (
      <>
      < TotalData />
      < CountryLists />
      </>
    );
  }
}

export default Home;