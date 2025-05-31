import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Create axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Add token to every request
api.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer my-token';
  return config;
});

// Handle errors globally
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

  if (!post) return <div></div>;

  return <div>{post.title}</div>;
}
