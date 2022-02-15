import React, { useEffect } from 'react';
import styles from '../../styles/Dashboard.module.css';
import Head from 'next/head';
import { Button, TextField, Paper, Alert } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import PlaceIcon from '@mui/icons-material/Place';

//Images
import humidityPic from '../../public/widget/humidity_2.png';
import windPic from '../../public/widget/wind.png';
import sunsetPic from '../../public/widget/sunset.png';
import sunrisePic from '../../public/widget/sunrise.png';

const unixToStampUTC = require('../../lib/unixTime');
const toUpper = require('../../lib/toUpper');

export default function Dashboard() {
  // Build weather data
  const [temp, setTemp] = React.useState('');
  const [city, setCity] = React.useState('');
  const [weather, setWeather] = React.useState('');
  const [icon, setIcon] = React.useState('');
  const [umidity, setUmidity] = React.useState('');
  const [wind, setWind] = React.useState('');
  const [sunrise, setSunrise] = React.useState('');
  const [sunset, setSunset] = React.useState('');
  var localWeather;

  // Build date
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let monthName = currentDate.toLocaleString('default', { month: 'long' });
  monthName = toUpper(monthName);
  let currentDateFormat = cDay + ' de ' + monthName;

  const getCurrentForecast = async (city) => {
    try {
      console.log('getCurrentForecast');
      const res = await axios.post(
        `${window.location.origin}/api/forecast/currentWeather`,
        {
          city,
        }
      );
      localWeather = res.data.replace(/test\(/g, '').replace(/\)/g, '');
      localWeather = JSON.parse(localWeather);
      setTemp(localWeather.main.temp.toFixed(1));
      setCity(localWeather.name);
      setWeather(toUpper(localWeather.weather[0].description));
      setIcon(localWeather.weather[0].icon);
      setUmidity(localWeather.main.humidity);
      setWind(localWeather.wind.speed);
      setSunrise(
        unixToStampUTC(localWeather.sys.sunrise, localWeather.sys.country)
      );
      setSunset(
        unixToStampUTC(localWeather.sys.sunset, localWeather.sys.country)
      );
    } catch (error) {
      console.log('error');
    }
  };

  React.useEffect(() => {
    if (!temp) getCurrentForecast('Canoas,BR');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Weather</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Paper className={styles.card} elevation={3}>
          <div>
            <PlaceIcon></PlaceIcon>
            <label className={styles.currentCity} id="currentCity">
              {city}, {currentDateFormat}
            </label>
          </div>
          <div className={styles.widget}>
            <Image
              alt="Weather Icon."
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              width={100}
              height={100}
              layout="responsive"
            />

            <div className={styles.divWeather}>
              <label className={styles.currentTemp} id="currentTemp">
                {temp}°C
              </label>
              <label className={styles.currentWeather} id="currentWeather">
                {weather}
              </label>
            </div>
          </div>

          <div className={styles.widgetExtraInfo}>
            <div>
              <Image
                alt="Humidity Icon."
                src={humidityPic}
                width={30}
                height={30}
                layout="fixed"
              />
              <label className={styles.currentHumidity} id="currentUmidity">
                {umidity} %
              </label>
            </div>

            <div>
              <Image
                alt="Wind Icon."
                src={windPic}
                width={30}
                height={30}
                layout="fixed"
              />

              <label className={styles.currentWind} id="currentWind">
                {wind} km/h
              </label>
            </div>
          </div>

          <div className={styles.widgetSunInfo}>
            <div>
              <Image
                alt="Sun rise Icon."
                src={sunrisePic}
                width={30}
                height={30}
                layout="fixed"
              />
              <label className={styles.currentWind} id="currentWind">
                {sunrise}
              </label>
            </div>

            <div>
              <Image
                alt="Sun set Icon."
                src={sunsetPic}
                width={30}
                height={30}
                layout="fixed"
              />
              <label className={styles.currentWind} id="currentWind">
                {sunset}
              </label>
            </div>
          </div>
        </Paper>
      </main>
    </div>
  );
}
