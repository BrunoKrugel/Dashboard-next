export default async function currentUV(req, res) {
  var axios = require('axios').default;
  const uri = process.env.RAPIDAPI_KEY;
  const uv = process.env.OPENUV_KEY;

  var options = {
    method: 'GET',
    url: 'https://aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com/api/v1/uv',
    params: {
      lat: req.body.lat,
      lng: req.body.long,
    },
    headers: {
      'x-access-token': uv,
      'x-rapidapi-host':
        'aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com',
      'x-rapidapi-key': uri,
    },
  };
  return new Promise((resolve, _reject) => {
    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
        resolve();
      })
      .catch(function (error) {
        res.status(405).end();
        console.error(error);
        resolve();
      });
  });
}
