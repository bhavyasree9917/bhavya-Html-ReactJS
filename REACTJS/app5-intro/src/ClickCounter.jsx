import React, { useState } from "react";


const ClickCounter = () => {
    const [count, setcount] = useState(0);

    const handleclick = () => {
        setcount(count => count + 1)
    }

    return <div>
        <h1>counter:{count}</h1>
        <button onClick={handleclick}>click here</button>

    </div>

}
export default ClickCounter
