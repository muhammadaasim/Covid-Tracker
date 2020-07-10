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
    </div>
  );
}

export default App;

