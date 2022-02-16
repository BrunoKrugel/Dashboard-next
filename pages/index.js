import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button, TextField, Paper, Alert } from '@mui/material';


import logo from '../public/logo/HortaOn.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Weather</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            alt="Humidity Icon."
            src={logo}
            width={300}
            height={300}
            layout="fixed"
          />
        </div>
        <Link href="/login" passHref>
          <Button variant="outlined">Entrar</Button>
        </Link>
      </main>
    </div>
  );
}
