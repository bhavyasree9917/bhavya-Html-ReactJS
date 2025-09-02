import React, { useState } from "react";
const Click = () => {
    const [count, setcount] = useState(0);
    const handleclick = () => {
        setcount(count => count + 3)

    }


    return <div>
        <h1>{count}</h1>
        <button onClick={handleclick}>increase  </button>

    </div>
}
export default Click;
