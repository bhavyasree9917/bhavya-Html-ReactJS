import React, { useState, useEffect } from 'react';

export default function CancelFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal: controller.signal })
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch canceled');
        } else {
          console.error(err);
        }
      });

    return () => controller.abort();
  }, []);

  if (!data) return <div></div>;

  return <div>{data.title}</div>;

}
