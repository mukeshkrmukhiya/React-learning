import { useState } from "react"


export default function LiveSearch() {

    const [name, setName] = useState('');
    const img = `https://source.unsplash.com/random/1000x600/?${name}`;

    // const [name,setName]=useState()

    return(
        <>
        <input className="row mx-auto my-3" type="text" onChange={(e)=>{return setName(e.target.value)}}/>
       {name===''?null: <img  className="row mx-auto" src={img} alt="image"  />} 
        </>
    )
}