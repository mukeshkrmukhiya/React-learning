import React from 'react';


function Card(props){
    return(
  
  <div className="cards">
    <div className="card">
      <img src={props.imgsrc} alt="random"  />
      <div className="card_info">
        <span className="card-category">{props.title}</span>
        <h3 className="card_title">{props.Sname}</h3>
        <a href={props.links} target="_NLKJD"  >
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  </div>
   
    );
  }
 
  export default Card;