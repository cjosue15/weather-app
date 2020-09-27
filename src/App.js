import React, { useState } from 'react';
import './App.css';
import SearchCity from './components/SearchCity';
import WeatherSide from './components/WeatherSide';

function App() {
    const [city, setCity] = useState('');

    return (
        <>
            <SearchCity setCity={setCity} />
            <WeatherSide city={city} />
        </>
    );
}

export default App;
