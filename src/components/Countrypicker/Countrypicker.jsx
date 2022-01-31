import React,{ useState,useEffect }from 'react';
import { NativeSelect,FormControl  } from '@material-ui/core';
import style from './Countrypicker.module.css'
import {fetchcountries} from '../../api';


 const Countrypicker = ({handleCountrychange}) => {
   const [fetchedcountries, setfetchedcountries]=useState([]);
  useEffect(() => {
    const fetchAPI = async() => {
      setfetchedcountries (await fetchcountries());
    }
    fetchAPI();
  },[setfetchedcountries]);
console.log(fetchedcountries);

  return<>
  <FormControl className={style.formControl}>
    <NativeSelect defaultValue='' onChange={(e) => handleCountrychange(e.target.value)}>
     <option value="">Global</option>
     {fetchedcountries.map((country, i) =>  <option key={i} value= {country}>{country}</option>)}

    </NativeSelect>
  </FormControl>
  
  
  </>;
};
export default Countrypicker;