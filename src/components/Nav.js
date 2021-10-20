/* eslint-disable */
import React from 'react';
import { useHistory } from 'react-router';

const Nav = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/Covid19-Tracking-App-React-Redux-Capstone/');
    location.reload();
  };

  return (
    <nav className='nav-menu'>
      {
        history.location.pathname.includes('details')
          ? <button type="button" onClick={goBack}>hello</button>
          : false
      }
      <h1 className="logo">Covid19 Tracker</h1>
      <ul className='menu-container'>
        <li className="menu-li">Date</li>
        <li className="menu-li">COVID-19 cases worldwide</li>
        <button className="mic-button" type="button">Mic</button>
        <button className="settings-button" type="button">Settings</button>
      </ul>
    </nav>
  );
};

export default Nav;