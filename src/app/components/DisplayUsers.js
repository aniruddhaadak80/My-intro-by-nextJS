"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

export default function DisplayUsers() {
  const userData = useSelector((data) => data.users);
  const dispatch = useDispatch();

  console.log(userData);
  return (
    <>
      <div className="users-div">
        <h1>Users List </h1>
        <hr />

        {userData.map((item) => (
          <>
            <h2>
              <span>{item.name}</span>
              <span>
                <button onClick={()=>dispatch(removeUser(item.id))} className="btn btn-danger">Remove</button>
              </span>
            </h2>
          </>
        ))}
      </div>
    </>
  );
}
