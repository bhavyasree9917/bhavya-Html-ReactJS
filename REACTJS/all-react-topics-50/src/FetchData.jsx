import React, { useState, useEffect } from 'react';

export default function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
      
  }, []);

  if (!data) return <div>L</div>;

  return <div>{data.title}</div>;
}
