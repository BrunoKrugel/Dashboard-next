export default async function handler(req, res) {
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
      'x-rapidapi-host': 'aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com',
      'x-rapidapi-key': uri,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
