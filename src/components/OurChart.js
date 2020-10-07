import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';




function OurChart(){

    const [globaldata, setglobaldata] = useState({});
    useEffect(() => {
        async function api() {
            let response = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            let data = await response.json();
             console.log(data.results[0]); 
             setglobaldata(data.results[0]);
        }
        api();
    }, [])
    return (
        <center>
      <div>
        <h2>Covid 19 chart</h2>
        <Bar
          data={{
            labels: ['Total Cases', 'Total Recovered','Total Deaths'],
            datasets: [
              {
                label: 'Covid-19 stats',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [globaldata.total_cases, globaldata.total_recovered, globaldata.total_deaths]
              }
            ]
          }}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
      </center>
    );
  }
  export default OurChart;