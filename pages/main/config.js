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

function getStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    return saved || defaultValue;
  }
}


export default function Home() {
  const [city, setCity] = React.useState('');
  
  const handleCitySelect = (value) => {
    setCity(value);
  }

  useEffect(() => {
    setCity(getStorageValue('cityName', ''));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['']);

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
              <MyMap center={center} onCitySelect={handleCitySelect} />
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="name"
                  label="Nome"
                  variant="outlined"
                  name="Nome"
                  value={getStorageValue('name', '')}
                  style={{ marginBottom: '10px', width: '100%'}}
                />
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  name="E-mail"
                  value={getStorageValue('email', '')}
                  style={{ marginTop: '10px' , marginBottom: '10px', width: '100%'}}
                />
                <TextField
                  id="cidade"
                  label="Cidade"
                  variant="outlined"
                  name="Cidade"
                  value={city}
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
