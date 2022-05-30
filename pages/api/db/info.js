import clientPromise from '../../../lib/db/mongodb';

export default async function info(req, res) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db()
          .collection('login')
          //TODO save user name and lat and long
          .findOne(
            {
              username: req.body.username,
            },
            function (err, result) {
              if (err || !result) {
                reject();
              } else {
                res.status(200).json(result);
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
