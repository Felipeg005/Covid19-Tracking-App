import React from 'react';
import arrow from '../img/arrow.png';

const CountryDetails = (props) => {
  const {
    todayConfirmed,
    todayDeaths,
    todayNewConfirmed,
    todayNewDeaths,
    todayNewOpenCases,
    todayNewRecovered,
    todayOpenCases,
    todayRecovered,
    yesterdayConfirmed,
    yesterdayDeaths,
    yesterdayOpenCases,
    yesterdayRecovered,
  } = props;

  return (
    <>
      <li className='detail-card'>
        <h3 className="det-title">Today Confirmed: {todayConfirmed}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card2'>
        <h3 className="det-title">Today Deaths: {todayDeaths}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card'>
        <h3 className="det-title">Today New Confirmed: {todayNewConfirmed}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card2'>
        <h3 className="det-title">Today New Deaths: {todayNewDeaths}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card'>
        <h3 className="det-title">Today New Open Cases: {todayNewOpenCases}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card2'>
        <h3 className="det-title">Today New Recovered: {todayNewRecovered}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card'>
        <h3 className="det-title">Today Open Cases: {todayOpenCases}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card2'>
        <h3 className="det-title">Today Recovered: {todayRecovered}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card'>
        <h3 className="det-title">Yesterday Confirmed: {yesterdayConfirmed}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card2'>
        <h3 className="det-title">Yesterday Deaths: {yesterdayDeaths}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card'>
        <h3 className="det-title">Yesterday Open Cases: {yesterdayOpenCases}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
      <li className='detail-card2'>
        <h3 className="det-title">Yesterday Recovered: {yesterdayRecovered}</h3>
        <button className="det-btn"><img className="go-img" src={arrow} alt="go"/></button></li>
    </>
  );
};

export default CountryDetails;