import axios from 'axios';

// const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=40&longitude=-4&hourly=temperature_2m&timezone=auto'
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=40&longitude=-4&current=temperature_2m&timezone=auto&forecast_days=1'

export const getWeather = async () => {
    try {
        const response = await axios.get(API_URL);
        // const nuevaData = response.data.hourly.temperature_2m[0];
        const nuevaData = response.data.current.temperature_2m;

        return nuevaData;
    } catch (error) {
        return error;
    }
}
