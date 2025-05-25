import React, { useState } from "react";
const ShowHide = () => {
    const [isVisible, setIsVisible] = useState(true);


    const handleshow = () => {
        setIsVisible(isVisible => !isVisible)
    }
    return <div>
        <button onClick={handleshow}>{isVisible ? "hide" : "show"}
            paragraph
        </button>
        {isVisible && <p>hello world</p>}

    </div>
}
export default ShowHide;