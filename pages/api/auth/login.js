import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  client.db().collection('login').findOne(
      {
        username: req.body.username,
        password: req.body.password,
      },
      function (err, result) {
        if (err || !result) {
            res.status(401).send('Usuário ou senha inválidos');
        } else{
            res.status(200).send('Ok');
            console.log(result);
        }
      }
    );
}
