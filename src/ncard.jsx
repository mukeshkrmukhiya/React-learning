import React from 'react';
import Card from './Card';


function ncard(val){
    return(
      <Card
      imgsrc = {val.imgsrc}
      title = {val.title}
    Sname = {val.Sname}
      links = {val.links}
  />
    );
  }

  /* Fast arrow function */
 /* {Sdata.map(val=> <Card
    imgsrc = {val.imgsrc}
    title = {val.title}
  Sname = {val.Sname}
    links = {val.links}
/>) } */

export default ncard;