
const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday']
const temperatures = [30, 32, 35, 28, 31, 36, 29];
const temperatureReport = document.getElementById('temperatureReport');
const highestTemperatureDayDisplay = document.getElementById('highestTemperatureDayDisplay');
let highestTemperature = 0;
let highestTemperatureDay = '';

for(const [index, temperature] of temperatures.entries()) {
    temperatureReport.innerHTML += `<p>${days[index]}: ${temperature}°</p>`;

    if(temperature > highestTemperature) {
        highestTemperature = temperature;
        highestTemperatureDay = `${days[index]}`
    }
}

highestTemperatureDayDisplay.innerHTML = `<p>Highest Temperature day is <b>${highestTemperatureDay}</b>, and the temperature is <b>${highestTemperature}°</b>.`