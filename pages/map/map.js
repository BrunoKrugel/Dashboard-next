import Head from 'next/head';
import * as React from 'react';
import styles from '../../styles/Landing.module.css';
import { MyMap } from '../../components/map/myMap';

const center = {
  lat: -30.0277,
  lng: -51.2287,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Preferências</title>
        <meta name="description" content="Horta On!" />
        <link rel="icon" href="/cloudy.png" />
      </Head>

      <main className={styles.main}>
        <MyMap center={center}/>
      </main>
    </div>
  );
}
