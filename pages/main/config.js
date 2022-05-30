import React, { useEffect } from 'react';
import styles from '../../styles/Config.module.css';
import Head from 'next/head';
import {
  Paper,
  Button,
  Stack,
  Snackbar,
  Tooltip,
  TextField,
} from '@mui/material';
import axios from 'axios';

import { useRouter } from 'next/router';
import { MyMap } from '../../components/map/myMap';

const center = {
  lat: -30.0277,
  lng: -51.2287,
};

const handleSubmit = async (e) => {
  e.preventDefault();
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Configurações</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/config.png" />
      </Head>
        <Paper className={styles.card}>
          <div>
            <div>
              <MyMap center={center} />
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="name"
                  label="Nome"
                  variant="outlined"
                  name="Nome"
                  style={{ marginBottom: '10px', width: '100%'}}
                />
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  name="E-mail"
                  style={{ marginTop: '10px' , marginBottom: '10px', width: '100%'}}
                />
                <TextField
                  id="cidade"
                  label="Cidade"
                  variant="outlined"
                  name="Cidade"
                  style={{ marginTop: '10px' , marginBottom: '10px', width: '100%'}}
                />
                <Button type="submit" variant="contained">
                  Salvar
                </Button>
              </form>
            </div>
          </div>
        </Paper>
    </div>
  );
}
