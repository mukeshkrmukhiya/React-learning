import React from "react";
import {Routes, Route} from "react-router-dom";
import CardA from "./CardA";
import Dtime from "./Dtime";
import FavS from "./FavS";
import Home from "./Home";
// import Navbar from "./Navbar";
import Regs from './Regs';
import Error from './Error'
import MainHeader from "./MainHeader";
import Hooksrev from "./Hooksrev";

export default function Rout() {return(

    <>
    
    
    
    <Routes>
    
        
        <Route path="/" element= {<MainHeader/>}>
        <Route index element= {<Home/>}/>
        <Route path="/carda" element= {<CardA/>}/>
        <Route  path="/regs" element= {<Regs/>}/>
        <Route path="/favs" element ={<FavS/>} />
        <Route path="/dtime" element ={<Dtime/>} />
        <Route path="/hooksrev/:myname/:lname" element ={<Hooksrev/>} />
   
        <Route path="*" element ={<Error/>} />
        </Route>
        
    </Routes>
    
    </>
)}