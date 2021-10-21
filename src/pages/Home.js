import React from 'react';
import CountryLists from '../components/Country-lists';
import TotalData from '../components/Home-Total';
import Nav from '../components/Nav';

class Home extends React.Component {
  render() {
    return (
      <>
      < Nav />
      < TotalData />
      < CountryLists />
      </>
    );
  }
}

export default Home;