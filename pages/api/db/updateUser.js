import clientPromise from '../../../lib/db/mongodb';

export default async function updateUser(req, res) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db()
          .collection('login')
          .updateOne(
            {
              username: req.body.username,
            },
            {
              $set: {
                name: req.body.name,
                email: req.body.email,
                lat: req.body.lat,
                long: req.body.long,
              },
            },
            function (err, result) {
              if (err || !result) {
                res.end();
                reject();
              } else {
                res.end();
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
