function getWeatherData(city) {
    return {
        city: city,
        temperature: Math.floor(Math.random() * 35) + "°C",
        humidity: Math.floor(Math.random() * 100) + "%",
        condition: "Sunny"
    };
}

// Example usage
console.log(getWeatherData("Chennai"));
