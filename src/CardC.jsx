import { FullName, LastName} from './index'
import React from 'react';


export default function CardC() {

    return(
        <>
        <FullName.Consumer >{ (fname)=>{return(

            <LastName.Consumer >{ (lname)=>{return(
         <h1>Hello {fname} {lname}</h1>
         )} 
         }</LastName.Consumer>
         
         )} 
         }</FullName.Consumer>
        {/* <h1>Mukesh suprised</h1> */}
        </>
    )
    }

    