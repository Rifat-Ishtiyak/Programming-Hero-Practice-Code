import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags ,name, capital, population, region, area} = props.country;
    // console.log(borders);
    return (
        <div className='country'>
            <img src={flags.png} alt="" width={100}/>
            <h2>{name.common}</h2>
            <p>
                Capital : {capital} <br />
                Population : {population} <br />
                Region : {region} <br />
                Area : {area} <br />
                {/* borders : {borders + ","} */}
            </p>
        </div>
    );
};

export default Country;