export default async function handler(req, res) {
  const uri = process.env.RAPIDAPI_KEY;
  var axios = require('axios').default;
  var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: req.body.city,
      callback: 'test',
      lang: 'pt_br',
      units: 'metric',
      mode: 'xml',
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
