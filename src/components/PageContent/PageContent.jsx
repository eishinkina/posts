import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Posts from "../../pages/Posts/Posts";
import PostDetail from "../../pages/PostDetail/PostDetail";

const PageContent = ({
  posts,
  isLoading,
  page,
  setPage,
  totalCount,
  users,
  selectedUser,
  setSelectedUser,
}) => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Posts
                posts={posts}
                isLoading={isLoading}
                page={page}
                setPage={setPage}
                totalCount={totalCount}
                users={users}
                setSelectedUser={setSelectedUser}
              />
            }
          />
          <Route
            path="/posts/:id"
            element={<PostDetail posts={posts} users={users} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default PageContent;
