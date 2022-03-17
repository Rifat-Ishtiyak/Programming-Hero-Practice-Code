import React from 'react';
import './Country.css'

const Country = (props) => {
    let {flags ,name, capital, population, region, area, languages} = props.country;

    if(languages === null || languages === undefined){
        languages ={value: "kisu nai"};
    }
    
    return (
        <div className='country'>
            <img src={flags.png} alt="" width={100}/>
            <h2>{name.common}</h2>
            <p>
                Capital : {capital} <br />
                Population : {population} <br />
                Region : {region} <br />
                Area : {area} <br />
                Languages : {Object.values(languages)}
            </p>
        </div>
    );
};

export default Country;