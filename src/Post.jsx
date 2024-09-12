import React, { useState } from "react";

function Post({ post }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const addComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p><strong>{post.author}</strong></p>
      <p>{post.content}</p>
      <p>{new Date(post.date).toLocaleString()}</p>

      <div className="comments">
        <h4>Komentáře:</h4>
        {comments.length > 0 ? (
          comments.map((c, index) => <p key={index}>{c}</p>)
        ) : (
          <p>Žádné komentáře.</p>
        )}
      </div>

      <div className="comment-form">
        <textarea
          placeholder="Přidat komentář"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={addComment}>Přidat komentář</button>
      </div>
    </div>
  );
}

export default Post;
