import { Select } from "antd";
import React, { useMemo } from "react";

const UserSelect = ({ users, setSelectedUser }) => {
  const usersList = useMemo(() => {
    const list = [{ value: 0, label: "Все" }];
    users.forEach((user) => {
      list.push({
        value: user.id,
        label: user.name,
      });
    });
    return list;
  }, [users]);

  return (
    <Select
      defaultValue={0}
      style={{ width: 200 }}
      options={usersList}
      onChange={(e) => setSelectedUser(e)}
    />
  );
};

export default UserSelect;
