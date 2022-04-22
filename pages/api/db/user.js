import clientPromise from '../../../lib/db/mongodb';

var status = {
  code: 0,
  message: '',
};

function createUser(req) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db()
          .collection('login')
          .insertOne(
            {
              username: req.body.username,
              password: req.body.password,
              email: req.body.email,
            },
            function (err, result) {
              if (err || !result) {
                status.code = 402;
                status.message = 'Erro durante criação do usuário';
                reject();
              } else {
                status.code = 201;
                status.message = 'Usuário criado com sucesso';
                resolve();
              }
            }
          );
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default async function user(req, res) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db()
          .collection('login')
          .findOne(
            {
              username: req.body.username,
              password: req.body.password,
            },
            function (err, result) {
              if (err || !result) {
                createUser(req).then((_res) => {
                  resolve();
                  res.send(status);
                });
              } else {
                status.code = 403;
                status.message = 'Usuário já existe';
                res.send(status);
                reject();
              }
            }
          );
      })
      .catch((err) => {
        reject(err);
      });
  });
}
