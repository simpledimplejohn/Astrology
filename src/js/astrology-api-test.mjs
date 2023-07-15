// this code sends to the astorology api
import fetch from 'node-fetch';


const apiUrl = 'https://json.freeastrologyapi.com/planets';
const apiKey = 'aUDMJHvbSIVusNoJ6uDzamHSz0CmwHV6tAX6T2S8';

const requestData = {
  year: 1978, 
  month: 12,
  date: 11,
  hours: 20,
  minutes: 0,
  seconds: 0,
  latitude: 17.38333,
  longitude: 78.4666,
  timezone: 5.5,
  settings: {
    observation_point: 'topocentric',
    ayanamsha: 'lahiri'
  }
};

fetch(apiUrl, {
  credentials: 'include',
  method: 'POST',
  headers: {
    Accept: 'application/json',
    // 'ACCESS-CONTROL-ALLOW-ORIGIN': "'https://json.freeastrologyapi.com",
    // 'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE, OPTIONS",
    'Content-Type': 'application/json',
    'X-API-KEY': `${apiKey}`,
    // 'User-Agent': 'node-fetch/2.6'
  },
  body: JSON.stringify(requestData)
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
