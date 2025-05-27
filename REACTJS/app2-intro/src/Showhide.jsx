import React, { useState } from "react";
const Showhide = () => {
    const [isvisible, setIsVisible] = useState(true);


    const togglevisible = () => {
        setIsVisible(isvisible => !isvisible)
    }
    return <div>
        <button onClick={togglevisible}>{isvisible ? "hide" : "show"}paragraph</button>
        {isvisible && <p>welcome to my world</p>}

    </div>
}
export default Showhide