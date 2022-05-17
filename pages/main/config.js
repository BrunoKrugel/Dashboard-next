import React, { useEffect } from 'react';
import styles from '../../styles/Dashboard.module.css';
import Head from 'next/head';
import { Paper, Alert, Stack, Snackbar, Tooltip } from '@mui/material';
import axios from 'axios';
import PlaceIcon from '@mui/icons-material/Place';
import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';

import { WeekInfo, WeekDate } from '../../components/week';
import { CurrentInfo } from '../../components/info';
import { MenuBar } from '../../components/menu';


export default function Home() {
    return (
      <div>
      <MenuBar />
      <div className={styles.container}>
      <Head>
        <title>Configurações</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/config.png" />
      </Head>
        <main className={styles.main}>

        </main>
      </div>
      </div>
    );
  }
  