import clientPromise from '../../../lib/db/mongodb';

export default async function loginAuth(req, res) {
  const client = await clientPromise;
  const isAuthPromise = new Promise((resolve, reject) => {
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
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
  });

  try {
    await isAuthPromise;
    res.status(200).send('Ok');
  } catch (error) {
    console.log('Login auth error: ' + error);
    res.status(401).send('Usuário ou senha inválidos');
  }
}
