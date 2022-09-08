import { useState, useEffect } from 'react';
import City from './City';
import DailyReport from './DailyReport';
import Graph from './Graph';
import WeeklyReport from './WeeklyReport';
import key from '../key.js';

function Forecast() {
    const { geolocation } = navigator;

    let lat;
    let lon;

    const [city, setCity] = useState('London');

    const [week, setWeek] = useState([]);
    const [weeklyTemp, setWeeklyTemp] = useState([]);

    const [currTemp, setCurrTemp] = useState(0);
    const [currWeather, setCurrWeather] = useState(0);
    const [currHumidity, setCurrHumidity] = useState(0);
    const [currWindSpeed, setCurrWindSpeed] = useState(0);


    const cloudy = <svg xmlns="http://www.w3.org/2000/svg" className='inline-block w-20' preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M11 7c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 14.763 16.714 16 15.128 16H6.872C5.286 16 4 14.763 4 13.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.139 8.561 8.535 7 11 7Zm0 1c-1.65 0-3.087 1.27-3.087 3.025c0 .278-.254.496-.545.496h-.55C5.814 11.521 5 12.3 5 13.261C5 14.22 5.814 15 6.818 15h8.364C16.186 15 17 14.221 17 13.26c0-.96-.814-1.739-1.818-1.739h-.55c-.29 0-.545-.218-.545-.496C14.087 9.248 12.65 8 11 8ZM8.392 4c1.456 0 2.726.828 3.353 2.045a6.055 6.055 0 0 0-1.284-.022A2.647 2.647 0 0 0 8.375 5a2.67 2.67 0 0 0-2.62 2.225l-.037.21a1 1 0 0 1-.986.83h-.258C3.66 8.265 3 8.933 3 9.757c0 .57.315 1.065.778 1.316c-.214.272-.39.576-.52.902a2.622 2.622 0 0 1 1.2-4.856l.221-.005A3.77 3.77 0 0 1 8.392 4Z" /></svg>;
    const rainy = <svg xmlns="http://www.w3.org/2000/svg" className='inline-block w-20' preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M10 3c2.465 0 3.863 1.574 4.066 3.474h.062C15.714 6.474 17 7.711 17 9.237C17 10.763 15.714 12 14.128 12l-.703-.001V12h-.03l-.957 1.741a.5.5 0 0 1-.876-.482l.693-1.26h-1.818V12h-.041l-.958 1.741a.5.5 0 0 1-.876-.482l.693-1.26H7.432V12h-.036l-.958 1.741a.5.5 0 0 1-.876-.482l.693-1.26l-.383.001C4.286 12 3 10.763 3 9.237c0-1.47 1.192-2.671 2.697-2.758l.237-.005C6.139 4.561 7.535 3 10 3Zm-2.89 8h7.071C15.187 11 16 10.221 16 9.26c0-.96-.814-1.739-1.818-1.739h-.55c-.29 0-.545-.218-.545-.496C13.087 5.248 11.65 4 10 4C8.35 4 6.913 5.27 6.913 7.025c0 .278-.254.496-.545.496h-.55C4.814 7.521 4 8.3 4 9.261C4 10.22 4.814 11 5.818 11h1.273a.61.61 0 0 1 .02 0Zm.638 3.316a.5.5 0 0 1 .186.682l-1 1.75a.5.5 0 0 1-.868-.496l1-1.75a.5.5 0 0 1 .682-.186Zm3.186.682a.5.5 0 0 0-.868-.496l-1 1.75a.5.5 0 0 0 .868.496l1-1.75Z" /></svg>;
    const clear = <svg xmlns="http://www.w3.org/2000/svg" className='inline-block w-20' preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M24 13a11 11 0 1 1-11 11a11 11 0 0 1 11-11Zm0-9.5v6.11m14.5-.11l-4.32 4.32M44.5 24h-6.11m.11 14.5l-4.32-4.32M24 44.5v-6.11m-14.5.11l4.32-4.32M3.5 24h6.11M9.5 9.5l4.32 4.32" /></svg>;

    const [icon, setIcon] = useState(cloudy);

    useEffect(() => {
        if ('geolocation' in navigator) {
            geolocation.getCurrentPosition(position => getLocation(position.coords), setDefault());
        } else {
            setDefault();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getIcon = (weather) => {
        if (weather === 'Clouds') {
            return cloudy;
        } else if (weather === 'Rain') {
            return rainy;
        } else {
            return clear;
        }
    }

    const getLocation = ({ latitude, longitude }) => {
        lat = latitude;
        lon = longitude;
        getForecast();
    }

    const setDefault = () => {
        lat = 51.509865;
        lon = -0.118092;
        getForecast();
    }

    const getForecast = async () => {
        if (lat && lon) {
            console.log('getting forecast');
            try {
                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

                const data = await (await fetch(url)).json();
                const { city, list } = data;
                setCity(city.name);

                const { temp, humidity } = list[0].main;
                const weather = list[0].weather[0].main;
                const windSpeed = (list[0].wind.speed * 3.6).toFixed(2);

                setCurrTemp(temp);
                setCurrHumidity(humidity);
                setCurrWeather(weather);
                setCurrWindSpeed(windSpeed);
                setIcon(getIcon(weather));

                setWeek([]); // clear the old data
                
                for (let i = 0; i < list.length; i++) {
                    if (i % 7 === 0) {
                        const { temp, humidity } = list[i].main;
                        const weather = list[i].weather[0].main;
                        const icon = getIcon(weather);
                        
                        setWeek(prev => { return [...prev, { icon: icon, weather: weather, humidity: humidity }] });
                        setWeeklyTemp(prev => { return [...prev, temp] });
                    }
                }

                console.log(city);
                console.log(week);

            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <main className='block rounded-lg p-14 bg-white h-full w-full shadow-md'>
            <City city={city} />
            <div className='flex justify-evenly'>
                <div>
                    <DailyReport icon={icon} temperature={currTemp.toFixed(0)} humidity={currHumidity} windSpeed={currWindSpeed} weather={currWeather} />
                </div>
                <div>
                    <Graph data={weeklyTemp} />
                    <WeeklyReport data={week} />
                </div>
            </div>
        </main>
    );
}

export default Forecast;