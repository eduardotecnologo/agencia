import {React, useEffect, useState} from 'react'
import '../assets/css/carrosel.css';


const Carrosel = () => { 
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/static/carrosel.json').then((response) => response.json()).then(setData);
    }, []);

    if(!data || !data.length) return null;
    
        <div className=".container-carousel">
           {data.map((item) => {
               const {id,name,image} = item;
               return(
                   <div className="item" key={id}>
                       <div className="image">
                            <img src={image} alt={name}/>
                       </div>
                   </div>
               );
           })}
        </div>
  }
  
  export default Carrosel;