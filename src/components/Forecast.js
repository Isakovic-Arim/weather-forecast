import { useState, useEffect } from 'react';
import { City } from './City';
import { DailyReport } from './DailyReport';

export function Forecast() {
    const { geolocation } = navigator;

    useEffect(() => {
        if ('geolocation' in navigator) {
            geolocation.getCurrentPosition(position => getLocation(position.coords));
        }
    }, []);

    const key = '0f3dc6f987535b7ad4427abd2e30e3d2';
    const [city, setCity] = useState('London');

    const [temp, setTemp] = useState(0);
    const [weather, setWeather] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);

    let lat;
    let lon;

    const getForecast = async() => {
        if (lat && lon) {
            try {
                var url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
                const data = await (await fetch(url)).json();
                console.log(data);
                setCity(data.city.name);
                const { temp, humidity } = data.list[0].main;
                const weather = data.list[0].weather[0].main;
                const windSpeed = (data.list[0].wind.speed * 3.6).toFixed(2);

                setTemp(temp);
                setHumidity(humidity);
                setWeather(weather);
                setWindSpeed(windSpeed);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const getLocation = ({latitude, longitude}) => {
        lat = latitude;
        lon = longitude;
        console.log(lat, lon);
        getForecast();
    }

    return (
        <main className='block rounded-md p-14 bg-white h-full w-96'>
            <City city={city} />
            <DailyReport temperature={temp} humidity={humidity} windSpeed={windSpeed} weather={weather}/>
        </main>
    );
}