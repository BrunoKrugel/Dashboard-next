import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Dashboard.module.css';
import Head from 'next/head';
import { Button, TextField, Paper, Alert } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import toUpper from '../../lib/toUpper';

export default function Dashboard() {
  // Build weather data
  const [temp, setTemp] = React.useState('');
  const [city, setCity] = React.useState('');
  const [weather, setWeather] = React.useState('');
  const [icon, setIcon] = React.useState('');
  var localWeather;

  // Build date
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let monthName = currentDate.toLocaleString('default', { month: 'long' });
  //monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
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
          <label className={styles.currentCity} id="currentCity">
            {city}, {currentDateFormat}
          </label>
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
        </Paper>
      </main>
    </div>
  );
}
