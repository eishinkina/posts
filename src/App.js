import React, { useEffect, useState } from "react";
import { useRequest } from "./hooks/useRequest";
import PostService from "./api/PostsService";

import PageHeader from "./components/PageHeader/PageHeader";
import PageContent from "./components/PageContent/PageContent";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(50);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);
  const limit = 5;

  const [getPosts, isLoading] = useRequest(async () => {
    let posts;
    if (selectedUser === 0) {
      posts = await PostService.getAllPosts(page, limit);
    } else {
      posts = await PostService.getPostsFromUser(selectedUser);
    }
    setPosts(posts.data);
    setTotalCount(+posts.headers["x-total-count"]);
  });

  useEffect(() => {
    getPosts();
  }, [page, selectedUser]);

  const [getUsers] = useRequest(async () => {
    const users = await PostService.getUsers();
    setUsers(users.data);
  });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <PageContent
        posts={posts}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default App;
