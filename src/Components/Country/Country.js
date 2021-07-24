import React from 'react';

const Country = (props) => {

    const{name,region}=props.country;
    return (
        <div>
            <h1>Name = {name}</h1>
            <p>Region = {region}</p>
        </div>
    );
};

export default Country;