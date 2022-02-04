import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Dashboard.module.css';
import Head from 'next/head';
import { Button, TextField, Paper, Alert } from '@mui/material';
import axios from 'axios';

export default function Dashboard() {
  const [weather, setWeather] = React.useState('');
  
  function getCurrentForecast() {
    const city = 'Canoas,BR';
  
    try {
      return axios
        .post(`${window.location.origin}/api/forecast/currentWeather`, {
          city,
        })
        .then((value) => {
          let obj = JSON.parse(value.data);
          console.log("value");
          setWeather(value.data);
        });
    } catch (error) {
      setWeather("error");
    }
  }

  React.useEffect(() => {
    getCurrentForecast();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Weather</title>
        <meta name="description" content="Dashboard Weather" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Paper className={styles.card} elevation={3}>
          <Paper className={styles.widget} elevation={3}>
            <label id="currentTemp">{weather}</label>
          </Paper>
        </Paper>
      </main>
    </div>
  );
}