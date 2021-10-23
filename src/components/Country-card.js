import React from 'react';
import { useHistory } from 'react-router-dom';
import world from '../img/world.png';
import world1 from '../img/world(1).png';
import world2 from '../img/world(2).png';
import world3 from '../img/world(3).png';
import coronavirus from '../img/coronavirus.png';
import pandemic from '../img/pandemic.png';
import virusTransmission from '../img/virus-transmission.png';
import arrow from '../img/arrow.png';

const CountryCard = (props) => {
  const {
    countryId, countryTitle, totalCases, color,
  } = props;

  const history = useHistory();

  const goToDetails = () => {
    history.push(`/Covid19-Tracking-App/details/${countryId}`);
  };

  const result = () => {
    if (([1, 0, 0, 1][color % 4]) === 0) {
      return '#4369b0';
    }
    return '#3c5e9c';
  };

  const backgroundStyle = {
    backgroundColor: result(),
  };

  const imgSource = () => {
    const imgArr = [world, world1, world2, world3, coronavirus, pandemic, virusTransmission];
    imgArr.sort(() => 0.5 - Math.random());
    return imgArr[2];
  };

  return (
    <>
      <li id={countryId} onClick={goToDetails} className="country-card" style={backgroundStyle}>
        <div className="card-img-container">
        <img className="card-img" src={imgSource()} alt="Country-Image"/>
        <button id={countryId} className="go-button" type="button" onClick={goToDetails}><img className="go-img" src={arrow} alt="Country-Image"/></button>
        </div>
        <div className="info-card-container">
        <h2 className="card-title">{countryTitle}</h2>
        <h3 className="card-cases">{totalCases}</h3>
        </div>
      </li>
    </>
  );
};

export default CountryCard;