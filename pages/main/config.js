import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import styles from '../../styles/Config.module.css';
import Head from 'next/head';
import {
  Paper,
  Button,
  TextField,
} from '@mui/material';
import axios from 'axios';

import { MyMap } from '../../components/map/myMap';

const { getStorageValue } = require('../../lib/db/storage');

const handleSubmit = async (e) => {
  e.preventDefault();
  const username = getStorageValue('username', '');
  const name = e.target.name.value;
  const email = e.target.email.value;
  const lat = getStorageValue('lat', '');
  const long = getStorageValue('long', '');
  try {
    await axios.post(`${window.location.origin}/api/db/updateUser`, {
      username,
      name,
      email,
      lat,
      long,
    });
  } catch (error) {
    console.log(error);
  }
  localStorage.setItem('name', name);
};

export default function Home() {
  const [city, setCity] = React.useState('');
  const [center, setCenter] = React.useState('');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleCitySelect = (value) => {
    setCity(value);
  };

  useEffect(() => {
    setCity(getStorageValue('cityName', ''));
    setCenter({
      lat: Number(getStorageValue('lat', '')),
      lng: Number(getStorageValue('long', '')),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['']);

  const handleClick = () => {
    enqueueSnackbar('Usuário atualizado com sucesso.', { 
      variant: 'success',
    });
  };

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
                defaultValue={getStorageValue('name', '')}
                style={{ marginBottom: '10px', width: '100%' }}
              />
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                name="E-mail"
                defaultValue={getStorageValue('email', '')}
                style={{
                  marginTop: '10px',
                  marginBottom: '10px',
                  width: '100%',
                }}
              />
              <TextField
                id="cidade"
                label="Cidade"
                variant="outlined"
                name="Cidade"
                value={city}
                style={{
                  marginTop: '10px',
                  marginBottom: '10px',
                  width: '100%',
                }}
              />
              <Button type="submit" variant="contained" onClick={handleClick}>
                Salvar
              </Button>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  );
}
