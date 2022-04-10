export default async function handler(req, res) {
  var axios = require('axios').default;
  const uri = process.env.RAPIDAPI_KEY;

  var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    params: {
      q: req.body.city,
      cnt: '7',
      units: 'metric',
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': uri,
    },
  };

  return new Promise((resolve, reject) => {
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
