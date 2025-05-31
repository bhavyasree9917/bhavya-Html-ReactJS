import React, { useState, useEffect } from 'react';
import axios from 'axios';


const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});


api.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer my-token';
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    alert('Error: ' + (error.response?.status || error.message));
    return Promise.reject(error);
  }
);

export default function FetchPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get('/posts/1')
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!post) return <div>Loading...</div>;

  return <div>{post.title}</div>;
}
