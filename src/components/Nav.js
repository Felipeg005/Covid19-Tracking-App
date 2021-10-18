import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className='nav-menu'>
        <h1 className="logo">Covid19 Tracker</h1>
        <ul className='menu-container'>
          <li className="menu-li">Date</li>
          <li className="menu-li">COVID-19 cases worldwide</li>
          <button className="mic-button" type="button">Mic</button>
          <button className="settings-button" type="button">Settings</button>
        </ul>
      </nav>
    );
  }
}

export default Nav;