"use client";
import React from "react";
import { useGetUsersQuery } from "@/redux/services/userApi";

const ListUsers = () => {
  const { data, error, isLoading, isFetching } = useGetUsersQuery();
  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Some error</p>;
  }
  return (
    <div>
      <p>ListUsers</p>
      {data?.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListUsers;
