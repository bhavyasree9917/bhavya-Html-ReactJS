import React, { useEffect, useState } from "react";
const Clock = () => {
    const [time, settime] = useState(new Date().toLocaleTimeString());


    useEffect(() => {
        const timer = setInterval(() => {
            settime(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return <div>
        <h1>{time}</h1>

    </div>
}
export default Clock