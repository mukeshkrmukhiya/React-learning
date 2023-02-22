import React from 'react';

import './HeadingG.css';

var curt = new Date();
var tt = curt.toLocaleTimeString();
const ptime = curt.getHours();
let Greet = "SORRY";
let cssStl = { };

if (ptime>=0 && ptime<12) {
  Greet = "GOOD MORNING"
  cssStl.color = "Green"
}else if(ptime>=12 && ptime<19){
  Greet = "GOOD AFTER NOON"
  cssStl.color = "orange"
}
else if(ptime>=19 && ptime<24){
  Greet = "GOOD NIGHT"
  cssStl.color = "white"
}

function HeadingG(){
    return(
        <div>
  
        <h1>Hello Sir,<span style={cssStl}>{Greet}</span> </h1>
        <h2>{tt}</h2>
        </div>
    );
}

 export default HeadingG;
  
 





