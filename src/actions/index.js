import axios from 'axios';

const API_KEY = '8cba098c2b7a5c8a4c6a8e342d79d54c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}
