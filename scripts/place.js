// Footer: current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Weather / Wind Chill
const temperature = 10; // °C
const windSpeed = 20;   // km/h

function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

let windChillResult;
if (temperature <= 10 && windSpeed > 4.8) {
    windChillResult = calculateWindChill(temperature, windSpeed) + '°C';
} else {
    windChillResult = 'N/A';
}
document.getElementById('windchill').textContent = windChillResult;