import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {

    const{name,region}=props.country;
    const countryStyle = {
        border : '1px solid purple',
        margin : '20px',
        padding:'20px',
        borderRadius:'20px',
    } 
    return (
        <div style={countryStyle}>
            <h1>Name:{name}</h1>
            <p>Region:{region}</p>
            <p>ID: <Link to={`/country/${name}`}>Show Details of {name}</Link> </p>
        </div>
    );
};

export default Country;