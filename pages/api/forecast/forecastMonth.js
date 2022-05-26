export default async function currentMonth(req, res) {
  var axios = require('axios').default;
  const uri = process.env.RAPIDAPI_KEY;

  var options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
    params: {
      q: req.body.city,
      units: 'metric',
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
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
