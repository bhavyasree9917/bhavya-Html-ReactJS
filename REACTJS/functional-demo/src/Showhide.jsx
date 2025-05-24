import React, { useState } from "react";
const Showhide = () => {
    const [isVisible, setIsVisible] = useState(true);
  const handlevisible=()=>{
    setIsVisible=(isVisible=>!isVisible)
  }

    return <div>
        <button onClick={handlevisible}>
            {isVisible ? "hide" : "show"}paragraph
        </button>
        {isVisible && <p>hello world</p>}

    </div>
}
export default Showhide;