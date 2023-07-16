import React from "react";
import PostsItem from "../PostsItem/PostsItem";

const PostsList = ({ posts, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {posts.map((post) => (
        <PostsItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsList;
