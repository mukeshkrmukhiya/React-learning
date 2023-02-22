import { FullName, LastName} from './index'
import React, {useContext} from 'react';
import CardC from './CardC'


export default function CardB() {
const fname = useContext(FullName)
const lname = useContext(LastName)
    return(
        <>
        <CardC/>
        <h2>its me</h2>
        <h1>Hello {fname} {lname}</h1>
        </>
    )
    }

    