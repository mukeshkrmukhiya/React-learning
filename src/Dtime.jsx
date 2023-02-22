import React, { Fragment } from 'react';

import './Dtime.css';

var nDate = new Date().toLocaleDateString();
var nTime = new Date().toLocaleTimeString();

 function Dtime() {

    
    return(
        
<>
         <div id= "hd">
    <h1 className='heading' >Welcome to India</h1>
    <p>Today Date {nDate}</p>
    <p>Today Time {nTime}</p>
    
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

