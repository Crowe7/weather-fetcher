
async function fetchWeather(city) {
    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=558610b9ba4f5fac2cb98fa9fb788fbf`, {mode: 'cors'});
        if(weather.ok != true) {
            throw new Error(`City ${city} not found!`);           
        }
        const weatherData = await weather.json();
        return weatherData;

    } catch(err) {
        alert(err);
        // maybe put that inside of a new function that pastes the alert into the dom??
 
    }

}


async function parseWeatherData(city) {
    try{
    const weather = await fetchWeather(city);
    
    class parsedWeatherClass {
        FeelsLike = weather.main.feels_like;
        Temp = weather.main.temp;
        Humidity = weather.main.humidity;
        Condition = weather.weather[0].description;
        Wind = weather.wind;
        Cringe = 'cringe';
    }
    const parsedWeather = new parsedWeatherClass;

    return parsedWeather;

    }catch(err) {
        console.log(err);
    }
    

}

export {parseWeatherData}
