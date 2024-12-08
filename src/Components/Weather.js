import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Access Token (you should replace this with your actual token)
  const access_key
  = 'd59d094c550317382386c838dd66a8b0';
  // Fetch weather data when the component is mounted
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`http://api.weatherstack.com/current? access_key=${access_key}&query=New Delhi`, {
          method: 'GET',
          'Host': '<calculated when request is sent>',
          'User-Agent' : 'PostmanRuntime/7.43.0',
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate,br',
          'Connection':'keep-alive'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWeather();
  }, []); // Empty array to run only once when component mounts

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Weather Forecast</h1>
      {weatherData ? (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherForecast;
