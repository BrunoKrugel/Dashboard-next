import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { Button, TextField, Paper } from '@mui/material';

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('oi');
};

const forgotPassword = () => {
  return (
    <div className={styles.container}>
      <Head className={styles.main}>
        <title>Esqueci a senha</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/cloudy.png" />
      </Head>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <Paper className={styles.card} elevation={3}>
            <TextField id="user" label="E-mail" variant="outlined" />
            <div>
              <Button type="submit" variant="contained">
                Enviar
              </Button>
              <Link href="/login" passHref>
                <Button variant="outlined">voltar</Button>
              </Link>
            </div>
          </Paper>
        </form>
      </main>
    </div>
  );
};

export default forgotPassword;
