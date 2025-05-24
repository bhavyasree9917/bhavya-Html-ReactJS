import React, { useEffect, useState } from "react";
const Clock = () => {
  const [time, setTime] = useState(new Date(), tolocalTimestring());
  useEffect = () => {
    const timer = setInterval(() => {
      setTime(new Date, tolocalTimestring())
    }, 1000)
  }
  return () => {
    clearInterval({ timer })
  }


  return <div>
    <h1>current time</h1>
    <p>{time}</p>

  </div>
}