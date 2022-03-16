import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

const LoadCountries = ()=> {
  const [countries, setCountries] = useState([]);
  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then( res => res.json())
      .then( data => setCountries(data))
  }, []);

  return(
    <div>
      <h2>Total Country : {countries.length} </h2>
      {
        countries.map( country => <h2>{country.name.common}</h2>)
      }
    </div>
  );
}

export default App;
