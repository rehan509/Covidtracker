import React from 'react';
import { useState, useEffect } from 'react';
import  {fetchdailyData} from '../../api';
import { Line ,Bar } from 'react-chartjs-2';
import style from './Charts.module.css';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';


 const Charts = ({data:{confirmed,deaths,recovered}, country }) => {
   const [dailydata , setdailyData]=useState([]);

      useEffect(() =>{
          const fetchAPI = async () =>{
              setdailyData(await fetchdailyData());
            } 
              
        fetchAPI();
   },[]); 
  
   console.log(confirmed,deaths,recovered);
const barchar= (
  confirmed
  ?(
    <Bar
    data={{
    labels:['Infected','Recovered','Deaths'],
    datasets:[{
      label:'People',
      backgroundColor:[  'rgba(0, 0, 255, 0.5)',
      
                         'rgba(0, 255, 0, 0.5)',
                         'rgba(255, 0, 0, 0.5)',
      ],
      data:[confirmed.value,deaths.value,recovered.value]
      
    }]

    }}
    options={{
    legend:{display:false},
    title:{display:true,text:`current state in ${country}`},
    }}
    
    
    />
  ):null
);




  const lineChart = (
    dailydata.length 
    ? (
     <Line
    data={{
      labels:dailydata.map(({ date })=> date),
      datasets:[{
        data : dailydata.map(({ confirmed })=> confirmed),
        label:'INFECTED',
        borderColor:'#333ff',
        filltrue :true,
      },{
        data : dailydata.map(({ deaths })=> deaths),
        label:'DEATHS',
        borderColor:'red',
        backgroundColor:'rgba(250,0,0,0.5)', 

        filltrue :true,
      }],
    }}
    />) : null
  );

  

  return <>
  
  <div className={style.container}>
   {country? barchar :lineChart}
  </div>
  
  </>

};


export default Charts;