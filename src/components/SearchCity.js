import React, { useState } from 'react';

const SearchCity = ({ setCity }) => {
    const [query, setQuery] = useState('');

    const handleInput = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(query);
        setQuery('');
    };

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input type='text' placeholder='Busca tu ciudad 😀' value={query} onChange={handleInput} />
        </form>
    );
};

export default SearchCity;
