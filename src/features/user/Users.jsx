import React from "react";
import User from "./User";
import "./users.css";

import useFetch from "../../custom-hooks/useFetch";

export default function Users() {
  const url = "https://dummyapi.io/data/v1/user?limit=10";
  const { users, loading, error } = useFetch(url, {
    "app-id": process.env.REACT_APP_DUMMY_USERS_APP_ID,
  });
  console.log({ users, loading, error });
  if (loading) return <div>Loading...</div>;

  return (
    <div className="user_container">
      {error && <div>{error}</div>}
      {users.map(({ firstName, lastName, picture }, idx) => (
        <User
          firstName={firstName}
          lastName={lastName}
          picture={picture}
          key={idx}
        />
      ))}
    </div>
  );
}
