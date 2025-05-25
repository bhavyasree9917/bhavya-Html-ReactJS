import React, { useEffect, useState } from "react";
const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleString());


    useEffect(() => {
        const timer = setTime(() => {
            setTime(new Date().toLocaleString())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })

    return <div>
        <h1>timer:{time}</h1>

    </div>
}
export default Clock