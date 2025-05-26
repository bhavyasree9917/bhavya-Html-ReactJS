import React, { useState } from "react";
const Showhide = () => {
    const [isvisible, setIsVisible] = useState(true);


    const togglevisibility = () => {
        setIsVisible(isvisible => !isvisible)
    }
    return <div>
        <button onClick={togglevisibility}>{isvisible ? "hide" : "show"}
            paragraph
        </button>
        {isvisible && <p>hello world</p>}


    </div>
}
export default Showhide