export default async function handler(req, res) {

    var axios = require("axios").default;
    const uri = process.env.RAPIDAPI_KEY;

    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
        params: {
            q: req.body.city,
        },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': uri
        }
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