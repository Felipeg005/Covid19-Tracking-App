import React from 'react';
import world from '../img/simbolo-del-globo-terraqueo.png';

const TotalData = () => {
  const covid = 'Covid-19';
  return (
    <>
    <header>
      <ul className="total-world-container">
        <li><img className="home-total-img" src={world} alt="World-Image"/></li>
        <div>
        <li><h2 className="world-title">{covid}<br/>Total World Cases</h2></li>
        <li><h3 className="world-cases">4333434</h3></li>
        </div>
      </ul>
    </header>
    </>
  );
};

export default TotalData;