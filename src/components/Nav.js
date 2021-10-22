/* eslint-disable */
import React from 'react';
import { useHistory } from 'react-router';
import moment from "moment";
import mic from '../img/microphone-16.png';
import settings from '../img/settings-16.png';
import arrow from '../img/arrow.png';

const date = moment().format("YYYY-MM-DD")

const Nav = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('/Covid19-Tracking-App-React-Redux-Capstone/');
  };

  return (
    <nav className='nav-menu'>
      {
        history.location.pathname.includes('details')
          ? <button className="go-back-btn" type="button" onClick={goBack}><img className="go-back-img" src={arrow} alt="go"/></button>
          : <h1 className="logo">Covid19 Tracker</h1>
      }
      <ul className='menu-container'>
        <li className="menu-date">Date: <br/>{date}</li>
        <button className="mic-button" type="button"><img className="mic-img" src={mic} /><img className="settings-img" src={settings} /></button>
      </ul>
    </nav>
  );
};

export default Nav;