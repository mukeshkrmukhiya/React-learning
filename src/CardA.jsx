import CardB from "./CardB";
import React ,  {useEffect, useState} from 'react';


export default function CardA() {

    const [Text, setText] = useState(0);
    const [Texts, setTexts] = useState(0);
    useEffect( ()=>{document.title = `you clicked me ${Text}` } , [ Text]);

    // const HOC = ()=> {
    // }
    return(
        <>
       <CardB/>

        <button onClick={(
       ()=> { setText(Text+1);}
      
    )} > <h1>ClickMe {Text}</h1></button> <br />
        <button onClick={(
       ()=> { setTexts(Texts+1);}
      
    )} > <h1>ClickMe {Texts}</h1></button>
       {/* {alert("your hacked")} */}
</>
    )}