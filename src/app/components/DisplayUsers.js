"use client";

import { useSelector } from "react-redux";

export default function DisplayUsers() {
  const userData = useSelector((data) => data.users);

  console.log(userData);
  return (
    <>
      <div className="users-div">
        <h1>Users List </h1>
        <hr />

        {userData.map((item) => (
          <h2>{item.name}</h2>
        ))}
      </div>
    </>
  );
}
