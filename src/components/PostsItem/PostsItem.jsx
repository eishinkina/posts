import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ post }) => {
  const { title, body } = post;

  const toLog = (post) => {
    console.log(post);
  };
  return (
    <Link to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
      <Card title={title} style={{ marginTop: 15 }} onClick={() => toLog(post)}>
        <div>{body}</div>
      </Card>
    </Link>
  );
};

export default PostsItem;
