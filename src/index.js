import React, {createContext}  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Sdata from './Sdata';
// import ncard from './ncard';
// import Regs from './Regs';
// import FavS from './FavS';
// import CardA from './CardA';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const FullName = createContext();
const LastName = createContext();




ReactDOM.render(
  <>
  
<App/>

 </>
 ,document.getElementById('root'));

export {FullName, LastName};



