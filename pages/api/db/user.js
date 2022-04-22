import clientPromise from '../../../lib/mongodb';

function createUser(req) {
    return new Promise((resolve, reject) => {
        clientPromise
            .then(client => {
                client
                    .db()
                    .collection('login')
                    .insertOne({
                            username: req.body.username,
                            password: req.body.password,
                            email: req.body.email,
                        },
                        function (err, result) {
                            if (err || !result) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        }
                    );
            })
            .catch(err => {
                reject(err);
            });
    });
}

export default async function user(req, res) {
    const client = await clientPromise;
    const userExist = new Promise((_resolve, reject) => {
        client
            .db()
            .collection('login')
            .findOne({
                    username: req.body.username
                },
                function (err, result) {
                    if (err || !result) {
                        createUser(req);
                    } else {
                        reject(err);
                    }
                }
            );
    });

    try {
        await userExist;
        res.status(200).send('Ok');
    } catch (error) {
        console.log('User creation error: ' + error);
        res.status(401).send('Usuário existente');
    }
}