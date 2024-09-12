import React from "react";
import Post from "./Post";

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>Žádné příspěvky nejsou k dispozici.</p>
      )}
    </div>
  );
}

export default PostList;
