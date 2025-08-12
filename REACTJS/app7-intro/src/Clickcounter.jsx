import React, { useState } from "react";
const Clickcounter=()=>{
    const[count,setcount]=useState(0);

    const handleclick=()=>{
        setcount(count=>count+1)
    }

    return<div>
        <h1>count:{count}</h1>
        <button onClick={handleclick}>clic</button>

    </div>
}
export default Clickcounter