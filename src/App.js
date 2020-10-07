import React from 'react';
import './App.css';
import OurNavbar from './components/OurNavbar';
import GlobalDataDisplay from './components/GlobalDataDisplay';
import OurChart from './components/OurChart';
import CountryData from './components/CountryData';

function App() {
  return(
    <div>
    <OurNavbar/>
    <GlobalDataDisplay/>
    <OurChart/>
    <CountryData/>
    
   
    </div>
  )
}

export default App;
