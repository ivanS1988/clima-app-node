const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2a0d5ab300441554132fca30bd5ddc9a`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}