import React, { useEffect } from 'react';
import styles from '../../styles/Config.module.css';
import Head from 'next/head';
import { Paper, Button, Stack, Snackbar, Tooltip, TextField } from '@mui/material';
import axios from 'axios';
import PlaceIcon from '@mui/icons-material/Place';
import { useRouter } from 'next/router';
import { MyMap } from '../../components/map/myMap';


import { styled } from '@mui/material/styles';

import { WeekInfo, WeekDate } from '../../components/week';
import { CurrentInfo } from '../../components/info';
import { MenuBar } from '../../components/menu';

const center = {
  lat: -30.0277,
  lng: -51.2287,
};


const handleSubmit = async (e) => {
  e.preventDefault();
};

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
          <Paper className={styles.card}>
        <div>
          <MyMap center={center}/>
        <div>

        <form onSubmit={handleSubmit}>
          <TextField
              id="name"
              label="Nome"
              variant="outlined"
              name="Nome"
            />
          <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              name="E-mail"
            />            
          <TextField
              id="cidade"
              label="Cidade"
              variant="outlined"
              name="Cidade"
            /> 
        <Button type="submit" variant="contained">
                Salvar
              </Button>                       
        </form>
        </div>

              </div>
          </Paper>

        </main>
      </div>
      </div>
    );
  }
  