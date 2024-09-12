import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const sortPosts = () => {
    const sortedPosts = [...posts].sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );
    setPosts(sortedPosts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="App">
      <h1>Fórum</h1>
      <PostForm addPost={addPost} />
      <button onClick={sortPosts}>
        Řadit podle data ({sortOrder === "asc" ? "vzestupně" : "sestupně"})
      </button>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
