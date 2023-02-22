import axios from "axios";
import { useEffect, useState } from "react";




export default function PokemonApi() {

    const [Num , setNum] = useState(0);
    const [name , setName] = useState('');
    const [moves , setMoves] = useState();


    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Num}`)

            console.log(res)
            setName(res.data.name)
            setMoves(res.data.moves.length)
        }
        getData()   })

    return(

    <>
    <h1>PokemonApi</h1>

    <h4>You have selected {Num} </h4>
    <h4>My name is  {name.toLocaleUpperCase()} </h4>
    <h4>You have  {moves} moves </h4>

    <select name="N" onChange={(e)=>{return setNum(e.target.value)}}>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="34">34</option>
        <option value="56">56</option>
        <option value="7">7</option>
    </select>


    </>)
}