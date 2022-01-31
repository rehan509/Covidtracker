import React from "react";
import {Charts, Cards, Countrypicker} from './components'
import style from './App.module.css';
import {fetchData} from './api/index';
import image from './images/image.png';


export default class App extends React.Component {
    
    state = {
        data:{},
        country:'',
    }


    handleCountrychange =async(country)=>{
   
   const fetchedData = await fetchData(country);
   this.setState({data: fetchedData , country:country});

    }



    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data :fetchedData });

        
    }
 
  render() {
    const {data,country}=this.state;

    return(
        <div className={style.container}>
           <img className={style.img} src={image}/>
            <Cards data={data}/>
            <Countrypicker handleCountrychange={this.handleCountrychange}/>
            <Charts data={data} country={country} />
           
          
        

        </div>
   
   
   
    )
   }  
}
