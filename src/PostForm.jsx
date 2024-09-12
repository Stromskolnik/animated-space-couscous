import React, { useState } from "react";

function PostForm({ addPost }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && title && content) {
      const newPost = {
        id: Date.now(),
        author,
        title,
        content,
        date: new Date().toISOString(),
        comments: [],
      };
      addPost(newPost);
      setAuthor("");
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Jméno autora"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Titulek"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Obsah příspěvku"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Vytvořit příspěvek</button>
    </form>
  );
}

export default PostForm;
