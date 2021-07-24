import React, { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const[countries,setCountry]=useState([]);

    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data =>setCountry(data))
    return (
        <div>

            {

                countries.map(country=><Country country={country}></Country>)

            }
            
        </div>
    );
};

export default Home;