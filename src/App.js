import React, { useState } from 'react';
import './App.css';
import SearchCity from './components/SearchCity';
import WeatherSide from './components/WeatherSide';

function App() {
    const [city, setCity] = useState('');

    return (
        <div id='main'>
            <SearchCity setCity={setCity} />
            <WeatherSide city={city} />
        </div>
    );
}

export default App;
