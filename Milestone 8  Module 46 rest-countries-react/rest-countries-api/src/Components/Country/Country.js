import React from 'react';

const Country = (props) => {
    const {name, capital, population, region, area} = props.country;
    return (
        <div>
            <h2>{name.common}</h2>
            <p>
                Capital : {capital} <br />
                Population : {population} <br />
                Region : {region} <br />
                Area : {area} <br />
            </p>
        </div>
    );
};

export default Country;