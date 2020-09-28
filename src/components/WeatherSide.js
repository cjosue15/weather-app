import React, { useEffect, useState } from 'react';
import Preloader from './Preloader';
const dayjs = require('dayjs');

const WeatherSide = ({ city }) => {
    const [data, setData] = useState({
        data: {},
        predictions: [],
        img: '',
        loading: false,
        error: false,
    });

    useEffect(() => {
        getData(city);
    }, [city]);

    const getData = async (city) => {
        try {
            if (city) {
                setData({
                    data: {},
                    predictions: [],
                    img: '',
                    loading: true,
                    error: false,
                });

                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=024d45d23e83c80330a78d19d8d88448`);
                const data = await response.json();
                const response2 = await fetch(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord?.lat}&lon=${data.coord?.lon}&exclude=minutely,hourly&units=metric&appid=024d45d23e83c80330a78d19d8d88448`
                );
                const responseImg = await fetch(`https://api.pexels.com/v1/search?query=${city}&per_page=1`, {
                    headers: new Headers({
                        Authorization: '563492ad6f917000010000019331042d1ff3469e86b549f1badb5a35',
                    }),
                });
                const { photos } = await responseImg.json();

                const { daily } = await response2.json();
                const predictions = daily.splice(4).map((item, i) => ({
                    id: Math.floor(Math.random() * 999999),
                    temp: Math.round(item.temp.day),
                    main: item.weather[0].main,
                    icon: item.weather[0].icon,
                    day: dayjs(new Date().setDate(new Date().getDate() + i + 1)).format('ddd'),
                }));

                console.log(predictions);

                if (data.cod === '404') {
                    setData({
                        data: data.message,
                        predictions: [],
                        img: '',
                        loading: false,
                        error: true,
                    });
                } else {
                    setData({
                        data: data,
                        predictions: predictions,
                        img:
                            photos[0]?.src.portrait ||
                            'https://images.pexels.com/photos/159020/sunset-sky-afterglow-evening-sky-159020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        loading: false,
                        error: false,
                    });
                }
            }
        } catch (error) {
            setData({
                data: {},
                predictions: [],
                img: '',
                loading: false,
                error: true,
            });
        }
    };

    const { name, sys, main, weather, wind } = data.data;

    if (data.error) {
        return <p style={{ textAlign: 'center' }}>!Oops la ciudad - {city} no existe 🥺😦¡</p>;
    }

    return (
        <>
            {data.loading && (
                <div>
                    <Preloader />
                </div>
            )}
            {main && (
                <div className='weather-content'>
                    <div className='weather-side' style={{ backgroundImage: `url("${data.img}")` }}>
                        <div className='weather-gradient'></div>
                        <div className='date-container'>
                            <h2 className='date-dayname'>{`${dayjs().format('dddd')}`}</h2>
                            <span className='date-day'>{`${dayjs().format('D MMMM YYYY')}`}</span>
                            <i className='location-icon' data-feather='map-pin'></i>
                            <span className='location'>{`${name}, ${sys.country}`}</span>
                        </div>
                        <div className='weather-container'>
                            <img className='weather-icon' src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt={weather[0].icon} />
                            <h1 className='weather-temp'>{Math.round(main.temp)}°C</h1>
                            <h3 className='weather-desc'>{weather[0].main}</h3>
                        </div>
                    </div>
                    <div className='info-side'>
                        <div className='today-info-container'>
                            <div className='today-info'>
                                <div className='precipitation'>
                                    <span className='title'>TEMP MAX</span>
                                    <span className='value'>{Math.round(main.temp_max)} %</span>
                                </div>
                                <div className='precipitation'>
                                    <span className='title'>TEMP MIN</span>
                                    <span className='value'>{Math.round(main.temp_min)} %</span>
                                </div>
                                <div className='precipitation'>
                                    <span className='title'>SENSATION</span>
                                    <span className='value'>{Math.round(main.feels_like)} %</span>
                                </div>
                                <div className='humidity'>
                                    <span className='title'>HUMIDITY</span>
                                    <span className='value'>{main.humidity} %</span>
                                </div>
                                <div className='wind'>
                                    <span className='title'>WIND</span>
                                    <span className='value'>{wind.speed} km/h</span>
                                </div>
                            </div>
                        </div>
                        <div className='week-container'>
                            <ul className='week-list'>
                                {data.predictions.map(({ id, temp, main, icon, day }) => (
                                    <li key={id}>
                                        <img className='day-icon' src={`https://openweathermap.org/img/w/${icon}.png`} alt={main} />
                                        <span className='day-name'>{day}</span>
                                        <span className='day-temp'>{temp}°C</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WeatherSide;
