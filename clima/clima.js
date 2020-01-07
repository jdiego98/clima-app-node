const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2595966e0e58a744cdb11b37d1f0e461&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}