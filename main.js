import moment from 'moment-timezone';

const cities = [
  { name: 'London', lat: 51.5074, lng: -0.1278, timezone: 'Europe/London' },
  { name: 'Beijing', lat: 39.9042, lng: 116.4074, timezone: 'Asia/Shanghai' },
  { name: 'NYC', lat: 40.7128, lng: -74.0060, timezone: 'America/New_York' },
  { name: 'Paris', lat: 48.8566, lng: 2.3522, timezone: 'Europe/Paris' },
  { name: 'Berlin', lat: 52.5200, lng: 13.4050, timezone: 'Europe/Berlin' },
  { name: 'Moscow', lat: 55.7558, lng: 37.6176, timezone: 'Europe/Moscow' }
];

const map = L.map('map').setView([51.5074, -0.1278], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

cities.forEach(city => {
  const marker = L.marker([city.lat, city.lng]).addTo(map);
  const currentTime = moment().tz(city.timezone).format('YYYY-MM-DD HH:mm:ss');
  marker.bindPopup(`<b>${city.name}</b><br>Current Time: ${currentTime}`);
});
