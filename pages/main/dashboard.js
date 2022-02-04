import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Dashboard.module.css';
import Head from 'next/head';
import { Button, TextField, Paper, Alert } from '@mui/material';
import axios from 'axios';
import Image from 'next/image'

export default function Dashboard() {
  const [temp, setTemp] = React.useState('');
  const [city, setCity] = React.useState('');
  const [weather, setWeather] = React.useState('');
  const [icon, setIcon] = React.useState('');
  var localWeather;

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
      setTemp(localWeather.main.temp);
      setCity(localWeather.name);
      setWeather(localWeather.weather[0].description);
      setIcon(localWeather.weather[0].icon);
    } catch (error) {
      console.log('error');
    }
  };

  React.useEffect(() => {
    if (!temp) getCurrentForecast('Canoas,BR');
  }, [temp]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Weather</title>
        <meta name="description" content="Dashboard Weather" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main className={styles.main}>
        <Paper className={styles.card} elevation={3}>
          <Paper className={styles.widget} elevation={3}>
            <label className={styles.currentCity} id="currentCity">
              {city}
            </label>
            <label className={styles.currentTemp} id="currentTemp">
              {temp}°C
            </label>
            <label className={styles.currentWeather} id="currentWeather">
              {weather}
            </label>
            <Image
                alt="Weather Icon."
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                width={100}
                height={100}
                layout="responsive"
                />
          </Paper>
        </Paper>
      </main>
    </div>
  );
}
