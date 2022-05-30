export default async function currentCity(req, res) {

    const axios = require("axios");
    const uri = process.env.RAPIDAPI_KEY;

    var options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: {
            location: req.body.localization,
            limit: '1',
            minPopulation: '1'
        },
        headers: {
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            'X-RapidAPI-Key': uri
        }
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