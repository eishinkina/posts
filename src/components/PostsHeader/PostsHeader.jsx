import React, { useMemo } from "react";
import UserSelect from "../UserSelect/UserSelect";
import styles from "./PostsHeader.module.scss";

const PostsHeader = ({ users, setSelectedUser }) => {
  return (
    <div className={styles.header}>
      <h1>Список постов</h1>
      <UserSelect users={users} setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default PostsHeader;
