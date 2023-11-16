"use client";

import Link from "next/link";

export default function Select() {
  return (
    <>
      <select className="btn btn-info">
        <option>Home</option>
        <option>contact</option>
        <option>Login </option>
        <option>Animations</option>
        <option>Just</option>
        <option>Error page</option>
      </select>
    </>
  );
}
