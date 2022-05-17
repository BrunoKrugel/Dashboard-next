import * as React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { Button, TextField, Paper, Alert, Snackbar } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';

var message = {
  severity: '',
  text: '',
};

function createSeverity(code) {
  if (code > 400) {
    return 'error';
  } else {
    return 'success';
  }
}

function validateForm(e) {
  if (
    e.target.user.value === '' ||
    e.target.password.value === '' ||
    e.target.email.value === ''
  ) {
    let field = !e.target.user.value
      ? e.target.user.name
      : !e.target.password.value
      ? e.target.password.name
      : e.target.email.name;
    message.text = `Por favor, preencha o campo de ${field}.`;
    message.severity = 'error';
    return false;
  }

  if (e.target.password.value !== e.target.passwordconfirm.value) {
    message.text = 'Senhas não conferem';
    message.severity = 'error';
    return false;
  }

  if (e.target.email.value.includes('@') === false) {
    message.text = 'E-mail inválido';
    message.severity = 'error';
    return false;
  }
  return true;
}

export default function CreateUser() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(e)) {
      const username = e.target.user.value;
      const password = e.target.password.value;
      const email = e.target.email.value;
      try {
        await axios
          .post(`${window.location.origin}/api/db/user`, {
            username,
            password,
            email,
          })
          .then((res) => {
            message.text = res.data.message;
            message.severity = createSeverity(res.data.code);
            setOpen(true);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setOpen(true);
    }
  };

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (message.severity === 'success') router.push('/login');
    message.severity = undefined;
    message.text = '';
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head className={styles.main}>
        <title>Criar usuário</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/cloudy.png" />
      </Head>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <Paper className={styles.card} elevation={3}>
            <TextField
              id="user"
              label="Usuário"
              variant="outlined"
              name="Usuário"
            />
            <TextField
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              name="Senha"
            />
            <TextField
              id="passwordconfirm"
              label="Confirme a senha"
              variant="outlined"
              type="password"
              name="Confirme a senha"
            />
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              name="E-mail"
            />
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
          <Alert
            onClose={handleClose}
            severity={message.severity || 'info'}
            sx={{ width: '100%' }}
          >
            {message.text}
          </Alert>
        </Snackbar>
      </main>
    </div>
  );
}
