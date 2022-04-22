import * as React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { Button, TextField, Paper, Alert, Snackbar } from '@mui/material';
import axios from 'axios';


export default function CreateUser(){
  const [open, setOpen] = React.useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.user.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    try {
      await axios.post(`${window.location.origin}/api/db/user`, {
        username,
        password,
        email,
      });
    } catch (error) {
      console.log(error);
      setOpen(true);
    }
  };

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };  

  return (
    <div className={styles.container}>
      <Head className={styles.main}>
        <title>Criar usuario</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/cloudy.png" />
      </Head>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <Paper className={styles.card} elevation={3}>
            <TextField id="user" label="Usuário" variant="outlined" />
            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
            />
            <TextField id="email" label="E-mail" variant="outlined" />
            <div>
              <Button type="submit" variant="contained">
                Registrar
              </Button>
              <Link href="/login" passHref>
                <Button variant="outlined">Voltar</Button>
              </Link>
            </div>
          </Paper>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Usuário ja existe.
          </Alert>
        </Snackbar>        
      </main>
    </div>
  );
}