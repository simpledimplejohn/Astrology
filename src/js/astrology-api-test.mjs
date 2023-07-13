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
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: ` ${apiKey}`,
    'User-Agent': 'node-fetch/2.6'
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
