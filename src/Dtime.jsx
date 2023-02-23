import React, { Fragment, useState } from 'react';

import './Dtime.css';




 function Dtime() {
    const [UTime, setUTime] = useState( );
    const [UDate, setUDate] = useState( );

    setInterval(() => {
        var nDate = new Date().toLocaleDateString();
        var nTime = new Date().toLocaleTimeString();
        setUDate(nDate);
        setUTime(nTime)
    }, 1000);

    
    return(
        
<>
     <div id= "hd" className='bg-transparent'>
    <h1 className='heading text-danger' >Welcome to India</h1>
    <p className='text-warning'>Today Date {UDate}</p>
    <p className='text-success'>Time {UTime}</p>
    
   </div>
   </>
    )
}


export default Dtime;


// const heading = {
//     color:"red" ,
//     textAlign: "center",
//     margin: "70px 90px",
    
//   }

