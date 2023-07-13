const axios = require('axios');

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

axios.post(apiUrl, requestData, {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
    'User-Agent': 'axios/0.21.4'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
