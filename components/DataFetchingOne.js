import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        console.log(res);
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch(err => {
        setLoading(false);
        setError("Error");
        setPost({});
      });
  }, []);

  return <div>post: {post.title}</div>;
}

export default DataFetchingOne;
