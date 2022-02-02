import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import {Button, TextField, Paper} from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Weather</title>
        <meta name="description" content="Dashboard Weather" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Paper className={styles.card} elevation={3}>
        <TextField id="user" label="User" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" type='password' />
        <div>
        <Button variant="contained">Login</Button>
        <Button variant="outlined">Sign in</Button>
        </div>
        </Paper>
      </main>
    </div>
  );
}
