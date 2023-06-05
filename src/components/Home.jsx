import React, { useEffect, useState } from 'react';
import { Carousel, Card, Button, } from 'react-bootstrap';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days&key=C8TRLTVLNCGHF7TUGN4AH5TET&contentType=json`;
      const response = await fetch(url);
      const data = await response.json();
      const { resolvedAddress, days } = data;
      console.log(data);
      setLocation(resolvedAddress);
      setWeather(days[0]);
      setForecast(days.slice(1));
      setLoading(false);
    };
    fetchWeather();
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target[0].value;
    setLocation(newLocation);
  };


  return (
    <div className='Home'>
      <form onSubmit={handleSubmit} style={{"margin":"40px"}} className='search-form'>
        <input type="text" placeholder="Enter Location" style={{"color":" #000"}}/>
        <Button type="submit" className='search'>Search</Button>
      </form>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        weather && location && (
          <div>
            <h1 className='primary-text'>
              {weather.description} in <br/>{location}, {weather.resolvedAddress}
            </h1>
            <h2 className='secondary-text'>
              It is <strong>{weather.temp}°F </strong> outside with <strong>{weather.humidity}%</strong> humidity.
            </h2>
            <Carousel className='card'>
              {forecast.map((day) => (
                <Carousel.Item key={day.datetimeEpoch}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{day.datetime}</Card.Title>
                      <Card.Text>{day.description}</Card.Text>
                      <Card.Text>Temperature: {day.temp}°F</Card.Text>
                      <Card.Text>Humidity: {day.humidity}%</Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
            <div>
              
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
