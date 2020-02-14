import React, { useState, useEffect } from "react";

import axios from "axios";
function DataFecthing() {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  function handleClick() {
    setIdFromButtonClick(id);
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(({ data: res }) => {
        console.log(res);
        setPost(res);
      })
      .catch(err => console.log(err));
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Button
      </button>
      <div>{post.title}</div>
    </div>
  );
}
// {post.map(post => (
// ))}

export default DataFecthing;
