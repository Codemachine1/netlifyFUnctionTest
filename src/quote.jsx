

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


export default function Quote(){
    var [quote,setQuote]=useState("")
    useEffect(()=>{
        async function getQuote(){
            const response = await fetch("/.netlify/functions/first");
            const result = await response.json();
            setQuote(result.quote);
        }
        getQuote()
    
    },[])
    return(
    <p>{quote}</p>
    )
}