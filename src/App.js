import React from 'react';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
// import {Cards,Chart,CountryPicker} from './components';

function App() {
  return (
    <div>
     <Cards/>
     <CountryPicker/>
     <Chart/>
     <h5>Made By Muhammad Aasim</h5>
    </div>
  );
}

export default App;

