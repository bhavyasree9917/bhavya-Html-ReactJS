import React, { useState } from "react";
const Clickcounter = () => {
    const [count, setCount] = useState(0);

    const handlecount = () => {
        setCount(count => count + 1)
    }


    return <div>
        <h1>count:{count}</h1>
        <button onClick={handlecount}>increase</button>
    </div>
}
export default Clickcounter