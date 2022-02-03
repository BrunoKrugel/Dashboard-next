import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
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
    console.log(error);
    res.status(401).send('Usuário ou senha inválidos');
  }
}
