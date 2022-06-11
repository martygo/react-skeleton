import React, { useState, useEffect } from "react";


import './index.css';

import Card from "./Card";
import Skeleton from "./Skeleton";

function App() {
  const [posts, setPosts] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setIsEmpty(false);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, []);


  return (
    <>
      <h1>Posts</h1>
      { isEmpty && [1, 2, 3, 4].map((value) => <Skeleton key={value} />)}
      {
        isEmpty ||
          posts.map((post) => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))
      }
    </>
  )
}

export default App
