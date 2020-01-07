const axios = require('axios');



const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '38b23be1a5msh0064711b475b3eap1d9586jsn37fe3d8009bd' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {

        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    /*
        instance.get()
            .then(resp => {

                console.log(resp.data.Results[0]);
            }).catch(err => {
                console.log('Error!!!!!!!!', err);
            });
            */

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}