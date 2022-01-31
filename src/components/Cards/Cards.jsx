import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import  style from './Cards.module.css'; 
import CountUp from 'react-countup';
import cx from 'classnames';


 const Cards= ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
 if(!confirmed){
    return "...loading";
 }
  
    return <>
           <div className={style.container} >
             <Grid container spacing={3} justify="center">
             <Grid item component ={Card} cs={12} md={3} className={cx(style.card,style.infected)}>
             <CardContent>
               <Typography color="textSecondary" gutterBottom>Infected</Typography>
               <Typography varient="h5">
                 <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                 </Typography>
               <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}</Typography>
               <Typography varient="body2">Number of Active Cases of Covid-19</Typography>
             </CardContent>
             </Grid>

             <Grid item component ={Card} cs={12} md={3} className={cx(style.card,style.recovered)}>
             <CardContent>
               <Typography color="textSecondary" gutterBottom>Recovered</Typography>
               <Typography varient="h5">
                 <CountUp start={0} end={recovered.value} duration={2.5} separator=','/>
                 </Typography>
               <Typography color="textSecondary">Real Date</Typography>
               <Typography varient="body2">Number of Recovered Cases of Covid-19</Typography>
             </CardContent>
             </Grid>

             <Grid item component ={Card} cs={12} md={3} className={cx(style.card,style.deaths)}>
             <CardContent>
               <Typography color="textSecondary" gutterBottom>Deaths</Typography>
               <Typography varient="h5">
                 <CountUp start={0} end={deaths.value} duration={2.5} separator=','/>
                 </Typography>
               <Typography color="textSecondary">Real Date</Typography>
               <Typography varient="body2">Number of Deaths Cases of Covid-19</Typography>
             </CardContent>

             </Grid>
               
             </Grid>
              </div>

              </>

};
export default Cards;