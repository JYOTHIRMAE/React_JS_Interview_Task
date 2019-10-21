import React from 'react'

//function Destruction({name,title,wish})  //It is first way.
const Dest =(props) => {
    const {json,aggrid} = props     //It is a Second way. 
    return (
        <div>
            {/* <h1>welcome {name},{title}. {wish}</h1> */}
            <h2>{json} {aggrid}</h2>
        </div>
    )
}
export default Dest;
