import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {

    const {countryName} = useParams();
    const[country,setCountry] = useState({});
    useEffect(()=>{

        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        // .then(data =>console.log(data));

         .then(data =>setCountry(data[0])); 



    },[])

    console.log("country",country);
    return (
        <div>

          <p> This is all about {countryName} </p>
           <h1>Name :{country.name} </h1>
           <p>capital:{country.capital}</p>
           <p>region:{country.region}</p>
           <p>demonym:{country.demonym}</p>
           <p>area:{country.area}</p>
           <img src={country.flag} alt="" />
        
        

            
        </div>
    );
};

export default CountryDetails;