export default async function handler(req, res) {
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: 'London,uk',
            lat: '0',
            lon: '0',
            callback: 'test',
            id: '2172797',
            lang: 'null',
            units: 'imperial',
            mode: 'xml'
        },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': '41aaa4e7c5msh6483e4ef6f7a679p180768jsn6c78bc21973d'
        }
    };

    axios.request(options).then(function (response) {
        res.status(200).json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}