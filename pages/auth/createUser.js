import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { Button, TextField, Paper, Alert } from '@mui/material';

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("oi");
  };

const createUser = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <title>Criar usuario</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </main>

      <form onSubmit={handleSubmit}>
        <Paper className={styles.card} elevation={3}>
          <TextField id="user" label="Usuário" variant="outlined" />
          <TextField
            id="password"
            label="Senha"
            variant="outlined"
            type="password"
          />
          <TextField id="user" label="E-mail" variant="outlined" />
          <div>
            <Button type="submit" variant="contained">
              Registrar
            </Button>
            <Link href="/" passHref>
              <Button variant="outlined">voltar</Button>
            </Link>
          </div>
        </Paper>
      </form>
    </div>
  );
};

export default createUser;
