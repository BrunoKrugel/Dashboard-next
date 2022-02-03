import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Dashboard.module.css';
import Head from 'next/head';
import { Button, TextField, Paper, Alert } from '@mui/material';


const getCurrentForecast = async (e) => {
  e.preventDefault();
  const city = 'Canoas,BR';
  try {
    await axios.post(`${window.location.origin}/api/forecast/currentWeather`, {
      city,
    });
    console.log('success');
  } catch (error) {
    console.error(error);
  }
};

const dashboard = () => {
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
            <h2 className="subtitle">0° C</h2>
          </Paper>
        </Paper>
      </main>
    </div>
  );
};

export default dashboard;
