import { Pagination } from "antd";
import React from "react";
import styles from "./PostsPagination.module.scss";

const PostsPagination = ({ page, setPage, totalCount }) => {
  return (
    <div className={styles.pagination}>
      <Pagination
        defaultCurrent={page}
        pageSize={5}
        total={totalCount}
        showSizeChanger={false}
        onChange={(e) => setPage(e)}
      />
    </div>
  );
};

export default PostsPagination;
