import React, { useState, useEffect } from 'react';

export default function PollData() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://worldtimeapi.org/api/ip')
        .then(res => res.json())
        .then(data => setTime(data.datetime))
        .catch(console.error);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time || 'Loading...'}</div>;
}
