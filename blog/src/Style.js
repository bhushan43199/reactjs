import React from 'react';
import './cutom.css'


export default function Style(prop)
{
    const h2={
        color:"green",
        fontSize:'36px'
    }
    const h3={
        color:"red",
        fontSize:"40px"
    }
    return <div>
        {/*globle Style*/}
        <h1 className="header">React Style</h1>
        {/*Inline Style*/}
        <h2 style ={h2}>React inline Style</h2>
        {/*conditional Styling*/}
        <h2 style ={prop.data=='apply'? h3:''} >React Conditional Style</h2>
    </div>
}