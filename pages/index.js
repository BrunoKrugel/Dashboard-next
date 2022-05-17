import Head from 'next/head';
import styles from '../styles/Landing.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button, TextField, Paper, Alert } from '@mui/material';

import { MenuBar } from '../components/menu';

import logo from '../public/logo/HortaOn.png';

export default function Home() {
  return (
    <div>
    <MenuBar />
    <div className={styles.container}>
      <Head>
        <title>Dashboard Weather</title>
        <meta name="description" content="Horta On!" />
        <link rel="icon" href="/cloudy.png" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image
            className={styles.floating}
            alt="Main image."
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
    </div>
  );
}
