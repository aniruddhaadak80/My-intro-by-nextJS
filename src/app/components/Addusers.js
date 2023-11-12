"use client";
import { useState } from "react";
import { addUsers } from "../redux/slice";
import { useDispatch } from "react-redux";

export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
  
    dispatch(addUsers(name));
  };
  return (
    <>
      <h1>Add UserName :</h1>
      <input
        className="user-input"
        type="text"
        placeholder="Add user name..."
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn btn-outline-warning" onClick={userDispatch}>
        Add users
      </button>
    </>
  );
}
