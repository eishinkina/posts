import React, { useEffect, useState } from "react";
import { Button, Card, Descriptions, Input } from "antd";
import styles from "./PostDetail.module.scss";
import { Form, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import PostService from "../../api/PostsService";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { nanoid } from "nanoid";
import { message } from "antd";

const PostDetail = ({ users, user }) => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    title: "",
    body: "",
  });

  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.open({
      type: "success",
      content: "Комментарий добавлен!",
      duration: 3,
    });
  };

  const [getPosts, isLoading] = useRequest(async () => {
    const posts = await PostService.getAllPosts();
    setPosts(posts.data);
  });

  const [getComments] = useRequest(async () => {
    const comments = await PostService.getAllComments(id);
    setComments(comments.data);
  });

  useEffect(() => {
    getPosts();
    getComments(id);
  }, []);

  const post = posts.find((post) => post.id == id);
  const currentUser = users.find((user) => user.id == post?.userId);

  const messageBar = post && currentUser && (
    <Card title={post.title}>
      <div>{post.body}</div>
    </Card>
  );

  const commentsBar =
    comments &&
    comments.length &&
    comments.map((comment) => (
      <Card title={comment.email} key={comment.id} style={{ marginTop: 5 }}>
        {comment.body}
      </Card>
    ));

  const userInfo = currentUser && (
    <Card title="User Info" style={{ marginTop: 15 }}>
      <Descriptions>
        <Descriptions.Item label="UserName">
          {currentUser.name}
        </Descriptions.Item>
        <Descriptions.Item label="Telephone">
          {currentUser.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Web">{currentUser.website}</Descriptions.Item>
        <Descriptions.Item label="Email">{currentUser.email}</Descriptions.Item>
        <Descriptions.Item label="City">
          {currentUser.address.city}
        </Descriptions.Item>
        <Descriptions.Item label="Company">
          {currentUser.company.name}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );

  const sendData = async () => {
    const newComment = {
      email: comment.title,
      body: comment.body,
      userId: 1,
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newComment,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    setComments((prev) => [...prev, { ...response.data, id: nanoid() }]);
    setComment({ title: "", body: "" });
    info();
  };

  return (
    <section>
      <header className={styles.header}>
        <Link to={`/`}>
          <Button type="primary" color="success">
            Назад
          </Button>
        </Link>
      </header>

      <div>{messageBar}</div>
      <div>{userInfo}</div>
      <h2>Комментарии:</h2>
      <div>{commentsBar}</div>
      <h2>Новый комментарий</h2>
      <form style={{ paddingBottom: 50 }} onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="Ваш email"
          style={{ marginBottom: 5 }}
          value={comment.title}
          onChange={(e) => setComment({ ...comment, title: e.target.value })}
        />
        <TextArea
          rows={4}
          placeholder="Комментарий"
          maxLength={6}
          style={{ marginBottom: 5 }}
          value={comment.body}
          onChange={(e) => setComment({ ...comment, body: e.target.value })}
        />
        <Button type="primary" onClick={sendData}>
          Отправить
        </Button>
      </form>
      {contextHolder}
    </section>
  );
};

export default PostDetail;
