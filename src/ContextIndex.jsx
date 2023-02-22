import React ,{createContext} from 'react';
import ReactDOM from 'react-dom';
// import Sdata from './Sdata';
// import ncard from './ncard';
// import Regs from './Regs';
// import FavS from './FavS';
import CardA from './CardA';
import './index.css';

const FullName = createContext();
const LastName = createContext();



ReactDOM.render(
  <>
{/* { Sdata.map(ncard)} */}
{/* <Regs/> */}

{/* <h1>Welcome</h1> */}
<FullName.Provider value={"Rajesh"}>
<LastName.Provider value={"Kumar"}>
<CardA/>
</LastName.Provider>
</FullName.Provider>

 </>
 ,document.getElementById('root'));


export { FullName, LastName};


