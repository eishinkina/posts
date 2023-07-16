import React, { useEffect } from "react";
import PostsHeader from "../../components/PostsHeader/PostsHeader";
import PostsList from "../../components/PostsList/PostsList";
import PostsPagination from "../../components/PostsPagination/PostsPagination";

const PostList = ({
  posts,
  isLoading,
  page,
  setPage,
  totalCount,
  users,
  setSelectedUser,
}) => {
  useEffect(() => {
    setSelectedUser(0);
  }, []);

  return (
    <div>
      <PostsHeader users={users} setSelectedUser={setSelectedUser} />
      <PostsList posts={posts} isLoading={isLoading} />
      <PostsPagination
        total={posts}
        page={page}
        setPage={setPage}
        totalCount={totalCount}
      />
    </div>
  );
};

export default PostList;
